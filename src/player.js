export function makePlayer(){return{x:70,y:350,vx:0,vy:0,w:27,h:32,face:1,grounded:false,hearts:3,invulnerable:0,checkpoint:70,score:0,swordTimer:0,swordCooldown:0};}
export function movePlayer(p,keys,level,dt){
 const left=keys.has('ArrowLeft')||keys.has('KeyA'),right=keys.has('ArrowRight')||keys.has('KeyD');
 const speed=220+(level.number>=6?12:0); if(left!==right){p.vx+=(right?1:-1)*speed*dt*8;p.face=right?1:-1;}else p.vx*=Math.pow(.0008,dt);
 p.vx=Math.max(-speed,Math.min(speed,p.vx));
 if((keys.has('Space')||keys.has('ArrowUp')||keys.has('KeyW'))&&p.grounded){p.vy=-465;p.grounded=false;}
 // Releasing jump cuts upward momentum for controllable jump height.
 if(!keys.has('Space')&&!keys.has('ArrowUp')&&!keys.has('KeyW')&&p.vy<-150)p.vy+=1150*dt;
 p.vy=Math.min(720,p.vy+1350*dt);p.x+=p.vx*dt;p.y+=p.vy*dt;p.x=Math.max(0,Math.min(level.length-p.w,p.x));
 p.grounded=false;
 for(const a of level.platforms){let py=a.y;if(a.moving)py+=Math.sin(performance.now()/850+a.phase)*a.move;if(p.vy>=0&&p.x+p.w>a.x&&p.x<a.x+a.w&&p.y+p.h>=py&&p.y+p.h-p.vy*dt<=py+5){p.y=py-p.h;p.vy=0;p.grounded=true;}}
 if(p.invulnerable>0)p.invulnerable-=dt;
}
