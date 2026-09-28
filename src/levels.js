export const THEMES=[
 {name:'Prado dos Sussurros',sky:['#9cd9c6','#e4edb0'],ground:'#537b59',top:'#9cc56d',accent:'#ffe59a',far:'#718c83',near:'#55766b',motif:'flower'},
 {name:'Campo das Pipas',sky:['#82cbe3','#ccecc6'],ground:'#4f806c',top:'#90c98e',accent:'#fff2ad',far:'#668fa0',near:'#538779',motif:'cloud'},
 {name:'Grutas de Cristal',sky:['#303d69','#836b9c'],ground:'#484469',top:'#8e83bd',accent:'#91f6e0',far:'#454d76',near:'#414361',motif:'crystal'},
 {name:'Bosque dos Cogumelos',sky:['#8996c7','#c7d8ec'],ground:'#465d77',top:'#7695b5',accent:'#a9f0dc',far:'#65779a',near:'#4c6882',motif:'mushroom'},
 {name:'Ruínas da Chuva',sky:['#708f91','#b1c2a0'],ground:'#656b53',top:'#a8ae74',accent:'#fff0b8',far:'#657979',near:'#5b7060',motif:'ruin'},
 {name:'Caminho das Nuvens',sky:['#6686bd','#dfbad0'],ground:'#555d88',top:'#bac3ee',accent:'#ffedac',far:'#7891b3',near:'#646f9d',motif:'cloud'},
 {name:'Jardim da Lua',sky:['#192b53','#685584'],ground:'#354a54',top:'#6f9c7a',accent:'#f2eeb1',far:'#334768',near:'#35434f',motif:'star'},
 {name:'Montanha Rubra',sky:['#496f9c','#9bc6d3'],ground:'#435a70',top:'#759bb1',accent:'#e3e6aa',far:'#536e8d',near:'#415d78',motif:'mountain'},
 {name:'Forja das Estrelas',sky:['#242a49','#536f91'],ground:'#39495e',top:'#7799b4',accent:'#9ce5dc',far:'#343f60',near:'#35475a',motif:'ember'},
 {name:'Templo do Amanhã',sky:['#17254a','#6270a6'],ground:'#454768',top:'#aaa3d1',accent:'#d4f39c',far:'#30395e',near:'#373e5a',motif:'star'}
];
// Every platform is reachable with Pingo's standard jump; each world adds a modest new wrinkle.
const layouts=[
 [0,270,500,760,1030,1270],[0,245,490,690,940,1180,1430],[0,260,490,720,970,1210,1460],[0,235,480,700,920,1150,1390],[0,250,490,710,950,1190,1450],[0,210,420,635,850,1060,1280,1510],[0,225,450,665,890,1110,1340,1570],[0,215,440,655,875,1090,1310,1540],[0,205,420,625,830,1040,1250,1470,1690],[0,235,455,680,900,1120,1340,1560,1780]];
export function makeLevel(n){
 const i=n-1, xs=layouts[i], length=xs.at(-1)+390, width=xs.length;
 const platformsY=[];
 const platforms=xs.map((x,j)=>{
  const suggested=j===0||j===width-1?430:([1,3,5].includes(j)?[350,318,365][(j+Math.floor(i/2))%3]:[385,340,370][(j+i)%3]);
  // Keep each step within the player's comfortable jump height, including early worlds.
  const y=j===0?430:Math.max(suggested,platformsY[j-1]-58);
  platformsY.push(y);
  return{x,y,w:j===0||j===width-1?300:155+(j%3)*8,h:26,moving:n>=3&&j>1&&j<width-1&&(j+i)%4===0,move:12+(i%3)*2,phase:j*1.7};
 });
 const spikes=[]; if(n>=4){for(let j=2;j<width-1;j+=n>=8?2:3) spikes.push({x:xs[j]+95,y:414,w:42,h:16});}
 const enemies=[]; for(let j=1;j<width-1;j++){if(j%(n<=2?3:2)===0)enemies.push({x:xs[j]+82,y:platforms[j].y-26,min:xs[j]+12,max:xs[j]+platforms[j].w-40,type:(j+i)%3});}
 const checkpoints=n>=3?[Math.floor(length*.53)]:[];
 return {number:n,name:THEMES[i].name,theme:THEMES[i],length,platforms,spikes,enemies,checkpoints,goalX:length-105,boss:n===10?{x:xs.at(-1)+35,y:318,w:112,h:112,hp:3}:null};
}
