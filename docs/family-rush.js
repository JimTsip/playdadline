var Rg=0,$f=1,Cg=2;var El=1,Pg=2,ha=3,as=0,bn=1,ri=2,Qr=0,fa=1,jf=2,Qf=3,ed=4,Ig=5;var eo=100,Lg=101,Dg=102,Ng=103,Og=104,Ug=200,Fg=201,Bg=202,kg=203,td=204,nd=205,zg=206,Gg=207,Vg=208,Hg=209,Wg=210,Xg=211,qg=212,Yg=213,Kg=214,$c=0,jc=1,Qc=2,Yo=3,eu=4,tu=5,nu=6,iu=7,id=0,Zg=1,Jg=2,ls=0,sd=1,rd=2,od=3,ad=4,ld=5,cd=6,ud=7,Vf="attached",$g="detached",hd=300,to=301,da=302,Mu=303,bu=304,hr=1e3,Ii=1001,Ko=1002,Bt=1003,Tu=1004;var no=1005;var hn=1006,pa=1007;var Ni=1008;var oi=1009,fd=1010,dd=1011,ma=1012,wu=1013,Ji=1014,yi=1015,$i=1016,Au=1017,Eu=1018,io=1020,pd=35902,md=35899,gd=1021,_d=1022,Oi=1023,Cs=1026,zs=1027,ga=1028,Ru=1029,gr=1030,Cu=1031;var Pu=1033,Rl=33776,Cl=33777,Pl=33778,Il=33779,Iu=35840,Lu=35841,Du=35842,Nu=35843,Ou=36196,Uu=37492,Fu=37496,Bu=37488,ku=37489,Ll=37490,zu=37491,Gu=37808,Vu=37809,Hu=37810,Wu=37811,Xu=37812,qu=37813,Yu=37814,Ku=37815,Zu=37816,Ju=37817,$u=37818,ju=37819,Qu=37820,eh=37821,th=36492,nh=36494,ih=36495,sh=36283,rh=36284,Dl=36285,oh=36286,jg=2200,Qg=2201,e_=2202,Vr=2300,Hr=2301,Zc=2302,Hf=2303,kr=2400,zr=2401,nl=2402,ah=2500,t_=2501,xd=0,Nl=1,_a=2,n_=3200;var Ol=0,i_=1,Gs="",Nt="srgb",Xn="srgb-linear",il="linear",gt="srgb";var Jc=7680;var s_=519,r_=512,o_=513,a_=514,yd=515,l_=516,c_=517,vd=518,Sd=519,Md=35044,Ul=35048;var bd="300 es",Li=2e3,Zo=2001;function _y(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function u_(){let s=Jo("canvas");return s.style.display="block",s}var Vm={},$o=null;function sl(...s){let e="THREE."+s.shift();$o?$o("log",e,...s):console.log(e,...s)}function h_(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Fe(...s){s=h_(s);let e="THREE."+s.shift();if($o)$o("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=h_(s);let e="THREE."+s.shift();if($o)$o("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Gr(...s){let e=s.join(" ");e in Vm||(Vm[e]=!0,Fe(...s))}function f_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var d_={[$c]:$c,[Qc]:nu,[eu]:eu,[Yo]:tu,[jc]:jc,[nu]:Qc,[iu]:iu,[tu]:Yo},Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hm=1234567,el=Math.PI/180,Wr=180/Math.PI;function cs(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function it(s,e,t){return Math.max(e,Math.min(t,s))}function Td(s,e){return(s%e+e)%e}function yy(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function vy(s,e,t){return s!==e?(t-s)/(e-s):0}function tl(s,e,t){return(1-t)*s+t*e}function Sy(s,e,t,n){return tl(s,e,1-Math.exp(-t*n))}function My(s,e=1){return e-Math.abs(Td(s,e*2)-e)}function by(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ty(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ay(s,e){return s+Math.random()*(e-s)}function Ey(s){return s*(.5-Math.random())}function Ry(s){s!==void 0&&(Hm=s);let e=Hm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cy(s){return s*el}function Py(s){return s*Wr}function Iy(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Ly(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dy(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*u,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function lh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ad(s,e){if(e.constructor===Float32Array)return s;let t=lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ed(s,e){if(e.constructor===Float32Array)return s;let t=lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Vs={DEG2RAD:el,RAD2DEG:Wr,generateUUID:cs,clamp:it,euclideanModulo:Td,mapLinear:yy,inverseLerp:vy,lerp:tl,damp:Sy,pingpong:My,smoothstep:by,smootherstep:Ty,randInt:wy,randFloat:Ay,randFloatSpread:Ey,seededRandom:Ry,degToRad:Cy,radToDeg:Py,isPowerOfTwo:Iy,ceilPowerOfTwo:Ly,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Dy,normalize:Ed,denormalize:Ad},Ye=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(h!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);g=Math.sin(g*S)/A,a=Math.sin(a*S)/A,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a;let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xf=new G,Wm=new Nn,Ve=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],S=i[1],A=i[4],v=i[7],T=i[2],b=i[5],x=i[8];return r[0]=o*_+a*S+l*T,r[3]=o*m+a*A+l*b,r[6]=o*g+a*v+l*x,r[1]=c*_+u*S+h*T,r[4]=c*m+u*A+h*b,r[7]=c*g+u*v+h*x,r[2]=f*_+d*S+p*T,r[5]=f*m+d*A+p*b,r[8]=f*g+d*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yf.makeScale(e,t)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yf.makeRotation(-e)),this}translate(e,t){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yf=new Ve,Xm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ny(){let s={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(i.r=qo(i.r),i.g=qo(i.g),i.b=qo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gs?il:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xn]:{primaries:e,whitePoint:n,transfer:il,toXYZ:Xm,fromXYZ:qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Xm,fromXYZ:qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}var Je=Ny();function Rs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Lo,su=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lo===void 0&&(Lo=Jo("canvas")),Lo.width=e.width,Lo.height=e.height;let i=Lo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rs(t[n]/255)*255):t[n]=Rs(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Oy=0,jo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vf(i[o].image)):r.push(vf(i[o]))}else r=vf(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function vf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Uy=0,Sf=new G,fn=class s extends Zi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ii,i=Ii,r=hn,o=Ni,a=Oi,l=oi,c=s.DEFAULT_ANISOTROPY,u=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=cs(),this.name="",this.source=new jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=hd;fn.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(d+1)/2,T=(g+1)/2,b=(u+f)/4,x=(h+_)/4,y=(p+m)/4;return A>v&&A>T?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=b/n,r=x/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=y/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=y/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ru=class extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new fn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new jo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rl=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ou=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,p,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Do.setFromMatrixColumn(e,0).length(),r=1/Do.setFromMatrixColumn(e,1).length(),o=1/Do.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fy,e,By)}lookAt(e,t,n){let i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),sr.crossVectors(n,mi),sr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),sr.crossVectors(n,mi)),sr.normalize(),Tc.crossVectors(mi,sr),i[0]=sr.x,i[4]=Tc.x,i[8]=mi.x,i[1]=sr.y,i[5]=Tc.y,i[9]=mi.y,i[2]=sr.z,i[6]=Tc.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],A=n[7],v=n[11],T=n[15],b=i[0],x=i[4],y=i[8],E=i[12],R=i[1],D=i[5],L=i[9],B=i[13],I=i[2],k=i[6],W=i[10],F=i[14],te=i[3],q=i[7],P=i[11],ne=i[15];return r[0]=o*b+a*R+l*I+c*te,r[4]=o*x+a*D+l*k+c*q,r[8]=o*y+a*L+l*W+c*P,r[12]=o*E+a*B+l*F+c*ne,r[1]=u*b+h*R+f*I+d*te,r[5]=u*x+h*D+f*k+d*q,r[9]=u*y+h*L+f*W+d*P,r[13]=u*E+h*B+f*F+d*ne,r[2]=p*b+_*R+m*I+g*te,r[6]=p*x+_*D+m*k+g*q,r[10]=p*y+_*L+m*W+g*P,r[14]=p*E+_*B+m*F+g*ne,r[3]=S*b+A*R+v*I+T*te,r[7]=S*x+A*D+v*k+T*q,r[11]=S*y+A*L+v*W+T*P,r[15]=S*E+A*B+v*F+T*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],S=l*d-c*f,A=a*d-c*h,v=a*f-l*h,T=o*d-c*u,b=o*f-l*u,x=o*h-a*u;return t*(_*S-m*A+g*v)-n*(p*S-m*T+g*b)+i*(p*A-_*T+g*x)-r*(p*v-_*b+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],S=t*a-n*o,A=t*l-i*o,v=t*c-r*o,T=n*l-i*a,b=n*c-r*a,x=i*c-r*l,y=u*_-h*p,E=u*m-f*p,R=u*g-d*p,D=h*m-f*_,L=h*g-d*_,B=f*g-d*m,I=S*B-A*L+v*D+T*R-b*E+x*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(a*B-l*L+c*D)*k,e[1]=(i*L-n*B-r*D)*k,e[2]=(_*x-m*b+g*T)*k,e[3]=(f*b-h*x-d*T)*k,e[4]=(l*R-o*B-c*E)*k,e[5]=(t*B-i*R+r*E)*k,e[6]=(m*v-p*x-g*A)*k,e[7]=(u*x-f*v+d*A)*k,e[8]=(o*L-a*R+c*y)*k,e[9]=(n*R-t*L-r*y)*k,e[10]=(p*b-_*v+g*S)*k,e[11]=(h*v-u*b-d*S)*k,e[12]=(a*E-o*D-l*y)*k,e[13]=(t*D-n*E+i*y)*k,e[14]=(_*A-p*T-m*S)*k,e[15]=(u*T-h*A+f*S)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,_=o*u,m=o*h,g=a*h,S=l*c,A=l*u,v=l*h,T=n.x,b=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(d+v)*T,i[2]=(p-A)*T,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+g))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(p+A)*x,i[9]=(m-S)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Do.set(i[0],i[1],i[2]).length(),a=Do.set(i[4],i[5],i[6]).length(),l=Do.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xi.copy(this);let c=1/o,u=1/a,h=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=u,Xi.elements[5]*=u,Xi.elements[6]*=u,Xi.elements[8]*=h,Xi.elements[9]*=h,Xi.elements[10]*=h,t.setFromRotationMatrix(Xi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Li,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Li)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Li,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Li)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Zo)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Do=new G,Xi=new qe,Fy=new G(0,0,0),By=new G(1,1,1),sr=new G,Tc=new G,mi=new G,Ym=new qe,Km=new Nn,Ps=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ps.DEFAULT_ORDER="XYZ";var ol=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ky=0,Zm=new G,No=new Nn,Ms=new qe,wc=new G,Xa=new G,zy=new G,Gy=new Nn,Jm=new G(1,0,0),$m=new G(0,1,0),jm=new G(0,0,1),Qm={type:"added"},Vy={type:"removed"},Oo={type:"childadded",child:null},Mf={type:"childremoved",child:null},Ct=class s extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new G,t=new Ps,n=new Nn,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ve}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.multiply(No),this}rotateOnWorldAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.premultiply(No),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(jm,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wc.copy(e):wc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Xa,wc,this.up):Ms.lookAt(wc,Xa,this.up),this.quaternion.setFromRotationMatrix(Ms),i&&(Ms.extractRotation(i.matrixWorld),No.setFromRotationMatrix(Ms),this.quaternion.premultiply(No.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vy),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,Gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new G(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hy={type:"move"},Qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function bf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Td(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bf(o,r,e+1/3),this.g=bf(o,r,e),this.b=bf(o,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=p_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Je.workingToColorSpace(Dn.copy(this),e),Math.round(it(Dn.r*255,0,255))*65536+Math.round(it(Dn.g*255,0,255))*256+Math.round(it(Dn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,r=Dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Nt){Je.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,i=Dn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Ac);let n=tl(rr.h,Ac.h,t),i=tl(rr.s,Ac.s,t),r=tl(rr.l,Ac.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Oe;Oe.NAMES=p_;var al=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ll=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ps,this.environmentIntensity=1,this.environmentRotation=new Ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qi=new G,bs=new G,Tf=new G,Ts=new G,Uo=new G,Fo=new G,eg=new G,wf=new G,Af=new G,Ef=new G,Rf=new yt,Cf=new yt,Pf=new yt,ur=class s{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qi.subVectors(e,t),i.cross(qi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qi.subVectors(i,t),bs.subVectors(n,t),Tf.subVectors(e,t);let o=qi.dot(qi),a=qi.dot(bs),l=qi.dot(Tf),c=bs.dot(bs),u=bs.dot(Tf),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Rf.setScalar(0),Cf.setScalar(0),Pf.setScalar(0),Rf.fromBufferAttribute(e,t),Cf.fromBufferAttribute(e,n),Pf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Rf,r.x),o.addScaledVector(Cf,r.y),o.addScaledVector(Pf,r.z),o}static isFrontFacing(e,t,n,i){return qi.subVectors(n,t),bs.subVectors(e,t),qi.cross(bs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),qi.cross(bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Uo.subVectors(i,n),Fo.subVectors(r,n),wf.subVectors(e,n);let l=Uo.dot(wf),c=Fo.dot(wf);if(l<=0&&c<=0)return t.copy(n);Af.subVectors(e,i);let u=Uo.dot(Af),h=Fo.dot(Af);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Uo,o);Ef.subVectors(e,r);let d=Uo.dot(Ef),p=Fo.dot(Ef);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Fo,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return eg.subVectors(r,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(eg,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Uo,o).addScaledVector(Fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},On=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(r,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Rc.subVectors(this.max,qa),Bo.subVectors(e.a,qa),ko.subVectors(e.b,qa),zo.subVectors(e.c,qa),or.subVectors(ko,Bo),ar.subVectors(zo,ko),Or.subVectors(Bo,zo);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Or.z,Or.y,or.z,0,-or.x,ar.z,0,-ar.x,Or.z,0,-Or.x,-or.y,or.x,0,-ar.y,ar.x,0,-Or.y,Or.x,0];return!If(t,Bo,ko,zo,Rc)||(t=[1,0,0,0,1,0,0,0,1],!If(t,Bo,ko,zo,Rc))?!1:(Cc.crossVectors(or,ar),t=[Cc.x,Cc.y,Cc.z],If(t,Bo,ko,zo,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ws),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ws=[new G,new G,new G,new G,new G,new G,new G,new G],Yi=new G,Ec=new On,Bo=new G,ko=new G,zo=new G,or=new G,ar=new G,Or=new G,qa=new G,Rc=new G,Cc=new G,Ur=new G;function If(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ur.fromArray(s,r);let a=i.x*Math.abs(Ur.x)+i.y*Math.abs(Ur.y)+i.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),u=n.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var nn=new G,Pc=new Ye,Wy=0,sn=class extends Zi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Md,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=e!==void 0?lh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ad(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ed(e,this.array)}};var cl=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ul=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ot=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xy=new On,Ya=new G,Lf=new G,ni=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);let t=Ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ya,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(Lf)),this.expandByPoint(Ya.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qy=0,Pi=new qe,Df=new Ct,Go=new G,gi=new On,Ka=new On,yn=new G,dn=class s extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_y(e)?ul:cl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Go).negate(),this.translate(Go.x,Go.y,Go.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ka.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(gi.min,Ka.min),gi.expandByPoint(yn),yn.addVectors(gi.max,Ka.max),gi.expandByPoint(yn)):(gi.expandByPoint(Ka.min),gi.expandByPoint(Ka.max))}gi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(Go.fromBufferAttribute(e,c),yn.add(Go)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let E=0;E<n.count;E++)a[E]=new G,l[E]=new G;let u=new G,h=new G,f=new G,d=new Ye,p=new Ye,_=new Ye,m=new G,g=new G;function S(E,R,D){c[E]=c[R]=c[D]=1,u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,D),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,D),h.sub(u),f.sub(u),p.sub(d),_.sub(d);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[E].add(m),a[R].add(m),a[D].add(m),l[E].add(g),l[R].add(g),l[D].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let E=0,R=A.length;E<R;++E){let D=A[E],L=D.start,B=D.count;for(let I=L,k=L+B;I<k;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new G,T=new G,b=new G,x=new G;function y(E){b.fromBufferAttribute(i,E),x.copy(b);let R=a[E];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),T.crossVectors(x,R);let L=T.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,L)}for(let E=0,R=n.count;E<R;++E)c[E]&&y(E);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new sn(f,u,h)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Md,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tg(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=cs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Wn=new G,ta=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?lh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ad(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ed(e,this.data.array)}},Nf=new G,Yy=new G,Ky=new Ve,Ki=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Nf.subVectors(n,t).cross(Yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Nf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ky.getNormalMatrix(e),i=this.coplanarPoint(Nf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zy=0,qn=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=fa,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jc,this.stencilZFail=Jc,this.stencilZPass=Jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ki().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var As=new G,Of=new G,Ic=new G,Lc=new G,Xr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,As)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=As.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(As.copy(this.origin).addScaledVector(this.direction,t),As.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Of.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),Lc.copy(this.origin).sub(Of);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ic),a=Lc.dot(this.direction),l=-Lc.dot(Ic),c=Lc.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Of).addScaledVector(Ic,f),d}intersectSphere(e,t){if(e.radius<0)return null;As.subVectors(e.center,this.origin);let n=As.dot(this.direction),i=As.dot(As)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,As)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,S=n.y-o.y,A=n.z-o.z,v=Math.abs(l),T=Math.abs(c),b=Math.abs(u),x,y,E,R,D,L,B,I,k,W,F,te;if(v>=T&&v>=b?(E=l,L=h,k=p,te=g,l>=0?(x=c,y=u,R=f,D=d,B=_,I=m,W=S,F=A):(x=u,y=c,R=d,D=f,B=m,I=_,W=A,F=S)):T>=b?(E=c,L=f,k=_,te=S,c>=0?(x=u,y=l,R=d,D=h,B=m,I=p,W=A,F=g):(x=l,y=u,R=h,D=d,B=p,I=m,W=g,F=A)):(E=u,L=d,k=m,te=A,u>=0?(x=l,y=c,R=h,D=f,B=p,I=_,W=g,F=S):(x=c,y=l,R=f,D=h,B=_,I=p,W=S,F=g)),E===0)return null;let q=x/E,P=y/E,ne=1/E,Se=R-q*L,Be=D-P*L,Z=B-q*k,ue=I-P*k,ve=W-q*te,we=F-P*te,me=ve*ue-we*Z,De=Se*we-Be*ve,xt=Z*Be-ue*Se;if(i){if(me<0||De<0||xt<0)return null}else if((me<0||De<0||xt<0)&&(me>0||De>0||xt>0))return null;let Ae=me+De+xt;if(Ae===0)return null;let He=ne*(me*L+De*k+xt*te);return(Ae>0?He<0:He>0)?null:this.at(He/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ng=new qe,Fr=new Xr,Dc=new ni,ig=new G,Nc=new G,Oc=new G,Uc=new G,Uf=new G,Fc=new G,sg=new G,Bc=new G,Jt=class extends Ct{constructor(e=new dn,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Fc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Uf.fromBufferAttribute(h,e),o?Fc.addScaledVector(Uf,u):Fc.addScaledVector(Uf.sub(t),u))}t.add(Fc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(r),Fr.copy(e.ray).recast(e.near),!(Dc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Dc,ig)===null||Fr.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(ng),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=A;v<T;v+=3){let b=a.getX(v),x=a.getX(v+1),y=a.getX(v+2);i=kc(this,g,e,n,c,u,h,b,x,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let S=a.getX(m),A=a.getX(m+1),v=a.getX(m+2);i=kc(this,o,e,n,c,u,h,S,A,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=A;v<T;v+=3){let b=v,x=v+1,y=v+2;i=kc(this,g,e,n,c,u,h,b,x,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let S=m,A=m+1,v=m+2;i=kc(this,o,e,n,c,u,h,S,A,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Jy(s,e,t,n,i,r,o,a){let l;if(e.side===bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===as,a),l===null)return null;Bc.copy(a),Bc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Bc);return c<t.near||c>t.far?null:{distance:c,point:Bc.clone(),object:s}}function kc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Nc),s.getVertexPosition(l,Oc),s.getVertexPosition(c,Uc);let u=Jy(s,e,t,n,Nc,Oc,Uc,sg);if(u){let h=new G;ur.getBarycoord(sg,Nc,Oc,Uc,h),i&&(u.uv=ur.getInterpolatedAttribute(i,a,l,c,h,new Ye)),r&&(u.uv1=ur.getInterpolatedAttribute(r,a,l,c,h,new Ye)),o&&(u.normal=ur.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};ur.getNormal(Nc,Oc,Uc,f.normal),u.face=f,u.barycoord=h}return u}var Za=new yt,rg=new yt,og=new yt,$y=new yt,ag=new qe,zc=new G,Ff=new ni,lg=new qe,Bf=new Xr,hl=class extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vf,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zc),this.boundingBox.expandByPoint(zc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zc),this.boundingSphere.expandByPoint(zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ff.copy(this.boundingSphere),Ff.applyMatrix4(i),e.ray.intersectsSphere(Ff)!==!1&&(lg.copy(i).invert(),Bf.copy(e.ray).applyMatrix4(lg),!(this.boundingBox!==null&&Bf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$g?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;rg.fromBufferAttribute(i.attributes.skinIndex,e),og.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Za.copy(t),t.set(0,0,0,0)):(Za.set(t.x,t.y,t.z,1),t.set(0,0,0)),Za.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=og.getComponent(r);if(o!==0){let a=rg.getComponent(r);ag.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($y.copy(Za).applyMatrix4(ag),o)}}return t.isVector4&&(t.w=Za.w),t.applyMatrix4(this.bindMatrixInverse)}},na=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},fr=class extends fn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Bt,u=Bt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cg=new qe,jy=new qe,fl=class s{constructor(e=[],t=[]){this.uuid=cs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:jy;cg.multiplyMatrices(a,t[r]),cg.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fr(t,e,e,Oi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Fe("Skeleton: No bone found with UUID:",r),o=new na),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Is=class extends sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vo=new qe,ug=new qe,Gc=[],hg=new On,Qy=new qe,Ja=new Jt,$a=new ni,Ls=class extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),hg.copy(e.boundingBox).applyMatrix4(Vo),this.boundingBox.union(hg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),$a.copy(e.boundingSphere).applyMatrix4(Vo),this.boundingSphere.union($a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ja.geometry=this.geometry,Ja.material=this.material,Ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(n),e.ray.intersectsSphere($a)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vo),ug.multiplyMatrices(n,Vo),Ja.matrixWorld=ug,Ja.raycast(e,Gc);for(let o=0,a=Gc.length;o<a;o++){let l=Gc[o];l.instanceId=r,l.object=this,t.push(l)}Gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(i*this.count),i,this.count,ga,yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Br=new ni,ev=new Ye(.5,.5),Vc=new G,dr=class{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,r=new Ki,o=new Ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],A=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,d-u,g-p,T-S).normalize(),i[1].setComponents(c+o,d+u,g+p,T+S).normalize(),i[2].setComponents(c+a,d+h,g+_,T+A).normalize(),i[3].setComponents(c-a,d-h,g-_,T-A).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,g-m,T-v).normalize();else if(i[4].setComponents(c-l,d-f,g-m,T-v).normalize(),t===Li)i[5].setComponents(c+l,d+f,g+m,T+v).normalize();else if(t===Zo)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);let t=ev.distanceTo(e.center);return Br.radius=.7071067811865476+t,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Vc.x=i.normal.x>0?e.max.x:e.min.x,Vc.y=i.normal.y>0?e.max.y:e.min.y,Vc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fg=new qe,au=class s{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];fg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new dr),n[i].setFromProjectionMatrix(fg,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new dr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var ia=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lu=new G,cu=new G,dg=new qe,ja=new Xr,Hc=new ni,kf=new G,pg=new G,qr=class extends Ct{constructor(e=new dn,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)lu.fromBufferAttribute(t,i-1),cu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new Ot(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(i),Hc.radius+=r,e.ray.intersectsSphere(Hc)===!1)return;dg.copy(i).invert(),ja.copy(e.ray).applyMatrix4(dg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),S=u.getX(_+1),A=Wc(this,e,ja,l,g,S,_);A&&t.push(A)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=Wc(this,e,ja,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=Wc(this,e,ja,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Wc(this,e,ja,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wc(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(lu.fromBufferAttribute(a,i),cu.fromBufferAttribute(a,r),t.distanceSqToSegment(lu,cu,kf,pg)>n)return;kf.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(kf);if(!(c<e.near||c>e.far))return{distance:c,point:pg.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var mg=new G,gg=new G,dl=class extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)mg.fromBufferAttribute(t,i),gg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mg.distanceTo(gg);e.setAttribute("lineDistance",new Ot(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pl=class extends qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sa=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_g=new qe,Wf=new Xr,Xc=new ni,qc=new G,ml=class extends Ct{constructor(e=new dn,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=r,e.ray.intersectsSphere(Xc)===!1)return;_g.copy(i).invert(),Wf.copy(e.ray).applyMatrix4(_g);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);qc.fromBufferAttribute(h,m),xg(qc,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)qc.fromBufferAttribute(h,p),xg(qc,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xg(s,e,t,n,i,r,o){let a=Wf.distanceSqToPoint(s);if(a<t){let l=new G;Wf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var gl=class extends fn{constructor(e=[],t=to,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ra=class extends fn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ds=class extends fn{constructor(e,t,n=Ji,i,r,o,a=Bt,l=Bt,c,u=Cs,h=1){if(u!==Cs&&u!==zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_l=class extends Ds{constructor(e,t=Ji,n=to,i,r,o=Bt,a=Bt,l,c=Cs){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xl=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oa=class s extends dn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function p(_,m,g,S,A,v,T,b,x,y,E){let R=v/x,D=T/y,L=v/2,B=T/2,I=b/2,k=x+1,W=y+1,F=0,te=0,q=new G;for(let P=0;P<W;P++){let ne=P*D-B;for(let Se=0;Se<k;Se++){let Be=Se*R-L;q[_]=Be*S,q[m]=ne*A,q[g]=I,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[g]=b>0?1:-1,u.push(q.x,q.y,q.z),h.push(Se/x),h.push(1-P/y),F+=1}}for(let P=0;P<y;P++)for(let ne=0;ne<x;ne++){let Se=f+ne+k*P,Be=f+ne+k*(P+1),Z=f+(ne+1)+k*(P+1),ue=f+(ne+1)+k*P;l.push(Se,Be,ue),l.push(Be,Z,ue),te+=6}a.addGroup(d,te,E),d+=te,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Yr=class s extends dn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,_=[],m=n/2,g=0;S(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function S(){let v=new G,T=new G,b=0,x=(t-e)/n;for(let y=0;y<=r;y++){let E=[],R=y/r,D=R*(t-e)+e;for(let L=0;L<=i;L++){let B=L/i,I=B*l+a,k=Math.sin(I),W=Math.cos(I);T.x=D*k,T.y=-R*n+m,T.z=D*W,h.push(T.x,T.y,T.z),v.set(k,x,W).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-R),E.push(p++)}_.push(E)}for(let y=0;y<i;y++)for(let E=0;E<r;E++){let R=_[E][y],D=_[E+1][y],L=_[E+1][y+1],B=_[E][y+1];(e>0||E!==0)&&(u.push(R,D,B),b+=3),(t>0||E!==r-1)&&(u.push(D,L,B),b+=3)}c.addGroup(g,b,0),g+=b}function A(v){let T=p,b=new Ye,x=new G,y=0,E=v===!0?e:t,R=v===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let I=L/i*l+a,k=Math.cos(I),W=Math.sin(I);x.x=E*W,x.y=m*R,x.z=E*k,h.push(x.x,x.y,x.z),f.push(0,R,0),b.x=k*.5+.5,b.y=W*.5*R+.5,d.push(b.x,b.y),p++}for(let L=0;L<i;L++){let B=T+L,I=D+L;v===!0?u.push(I,I+1,B):u.push(I+1,I,B),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var pr=class s extends dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let S=g*f-o;for(let A=0;A<c;A++){let v=A*h-r;p.push(v,-S,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let A=S+c*g,v=S+c*(g+1),T=S+1+c*(g+1),b=S+1+c*g;d.push(A,v,b),d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var yl=class s extends dn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new G,f=new G,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let S=[],A=g/n,v=o+A*a,T=e*Math.cos(v),b=Math.sqrt(e*e-T*T),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let E=y/t,R=i+E*r;h.x=-b*Math.cos(R),h.y=T,h.z=b*Math.sin(R),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+x,1-A),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let A=u[g][S+1],v=u[g][S],T=u[g+1][S],b=u[g+1][S+1];(g!==0||o>0)&&d.push(A,v,b),(g!==n-1||l<Math.PI)&&d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function so(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(yg(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yg(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Un(s){let e={};for(let t=0;t<s.length;t++){let n=so(s[t]);for(let i in n)e[i]=n[i]}return e}function yg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var m_={clone:so,merge:Un},nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ss=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},uu=class extends ss{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kr=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends Kr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ns=class extends qn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hu=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fu=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Qa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function sv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vg(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function rv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var rs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},du=class extends rs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kr,endingEnd:kr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zr:r=e,a=2*t-n;break;case nl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zr:o=e,l=2*n-t;break;case nl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,A=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let T=0;T!==a;++T)r[T]=g*o[u+T]+S*o[c+T]+A*o[l+T]+v*o[h+T];return r}},vl=class extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},pu=class extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},mu=class extends rs{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,S=h[g],A=h[g+1],v=e*f+p*2,T=u[v],b=u[v+1],x=av(n,t,S,T,i);r[p]=g_(x,_,A,b,m)}return r}};function g_(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ov(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function av(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=g_(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=ov(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Qa(e.settings)&&(n.settings={inTangents:cr(e.settings.inTangents,Array),outTangents:cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Zc:t=this.InterpolantFactoryMethodSmooth;break;case Hf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Zc;case this.InterpolantFactoryMethodBezier:return Hf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Qa(this.settings)&&(Sg(this.settings.inTangents,e),Sg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Qa(this.settings)&&(Mg(this.settings.inTangents,e),Mg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&xy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Qa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Sg(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Mg(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Hr;var Os=class extends si{constructor(e,t,n){super(e,t,n)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Vr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends si{constructor(e,t,n,i){super(e,t,n,i)}};Sl.prototype.ValueTypeName="color";var Us=class extends si{constructor(e,t,n,i){super(e,t,n,i)}};Us.prototype.ValueTypeName="number";var gu=class extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fs=class extends si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gu(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends si{constructor(e,t,n){super(e,t,n)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Vr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends si{constructor(e,t,n,i){super(e,t,n,i)}};mr.prototype.ValueTypeName="vector";var Di=class{constructor(e="",t=-1,n=[],i=ah){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cs(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=sv(l);l=vg(l,1,u),c=vg(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function lv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return mr;case"color":return Sl;case"quaternion":return Fs;case"bool":case"boolean":return Os;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lv(s.type);if(s.times===void 0){let n=[],i=[];rv(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Qa(s.settings)&&(t.settings={inTangents:cr(s.settings.inTangents,Float32Array),outTangents:cr(s.settings.outTangents,Float32Array)}),t}var is={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(bg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!bg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function bg(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _u=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},__=new _u,os=class{constructor(e){this.manager=e!==void 0?e:__,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};os.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es={},Xf=class extends Error{constructor(e,t){super(e),this.response=t}},aa=class extends os{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=is.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Es[e]!==void 0){Es[e].push({onLoad:t,onProgress:n,onError:i});return}Es[e]=[],Es[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Es[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,_=0,m=new ReadableStream({start(g){S();function S(){h.read().then(({done:A,value:v})=>{if(A)g.close();else{_+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let b=0,x=u.length;b<x;b++){let y=u[b];y.onProgress&&y.onProgress(T)}g.enqueue(v),S()}},A=>{g.error(A)})}}});return new Response(m)}else throw new Xf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{is.add(`file:${e}`,c);let u=Es[e];delete Es[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Es[e];if(u===void 0)throw this.manager.itemError(e),c;delete Es[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ho=new WeakMap,xu=class extends os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=is.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Ho.get(o);h===void 0&&(h=[],Ho.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Jo("img");function l(){u(),t&&t(this);let h=Ho.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ho.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),is.remove(`image:${e}`);let f=Ho.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Ho.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),is.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Zr=class extends os{constructor(e){super(e)}load(e,t,n,i){let r=new fn,o=new xu(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Jr=class extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ml=class extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zf=new qe,Tg=new G,wg=new G,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tg),wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){zf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Zo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(zf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yc=new G,Kc=new Nn,ns=new G,bl=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,Kc,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Kc,ns.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yc,Kc,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Kc,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},lr=new G,Ag=new Ye,Eg=new Ye,un=class extends bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Ag,Eg),t.subVectors(Eg,Ag)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qf=class extends la{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Wr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Tl=class extends Jr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yf=class extends la{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},wl=class extends Jr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$r=class extends bl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kf=class extends la{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Kf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ks=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gf=new WeakMap,Al=class extends os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=is.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Gf.has(o)===!0?(i&&i(Gf.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return is.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Gf.set(l,c),is.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});is.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Wo=-90,Xo=1,ca=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new un(Wo,Xo,e,t);i.layers=this.layers,this.add(i);let r=new un(Wo,Xo,e,t);r.layers=this.layers,this.add(r);let o=new un(Wo,Xo,e,t);o.layers=this.layers,this.add(o);let a=new un(Wo,Xo,e,t);a.layers=this.layers,this.add(a);let l=new un(Wo,Xo,e,t);l.layers=this.layers,this.add(l);let c=new un(Wo,Xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yu=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var vu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Nn.multiplyQuaternionsFlat(e,o,e,t,e,n),Nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Cd="\\[\\]\\.:\\/",uv=new RegExp("["+Cd+"]","g"),Pd="[^"+Cd+"]",hv="[^"+Cd.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Pd),dv=/(WCOD+)?/.source.replace("WCOD",hv),pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),gv=new RegExp("^"+fv+dv+pv+mv+"$"),_v=["material","materials","bones","map"],Zf=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(e){let t=gv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);_v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Zf;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Su=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:kr,endingEnd:kr};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Qg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case t_:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ah:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===e_;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===jg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=zr,i.endingEnd=zr):(e?i.endingStart=this.zeroSlopeAtStart?zr:kr:i.endingStart=nl,t?i.endingEnd=this.zeroSlopeAtEnd?zr:kr:i.endingEnd=nl)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},xv=new Float32Array(1),ua=class extends Zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=i[h],d=f.name,p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;p=new vu(St.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new vl(new Float32Array(2),new Float32Array(2),1,xv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Di.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ah),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Su(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Di.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Jf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Id(s,e,t,n){let i=yv(n);switch(t){case gd:return s*e;case ga:return s*e/i.components*i.byteLength;case Ru:return s*e/i.components*i.byteLength;case gr:return s*e*2/i.components*i.byteLength;case Cu:return s*e*2/i.components*i.byteLength;case _d:return s*e*3/i.components*i.byteLength;case Oi:return s*e*4/i.components*i.byteLength;case Pu:return s*e*4/i.components*i.byteLength;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Nu:return Math.max(s,16)*Math.max(e,8)/4;case Iu:case Du:return Math.max(s,8)*Math.max(e,8)/2;case Ou:case Uu:case Bu:case ku:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fu:case Ll:case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $u:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sh:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dl:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yv(s){switch(s){case oi:case fd:return{byteLength:1,components:1};case ma:case dd:case $i:return{byteLength:2,components:1};case Au:case Eu:return{byteLength:2,components:4};case Ji:case wu:case yi:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function k_(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sv(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,TS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,US=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Mv,alphahash_pars_fragment:bv,alphamap_fragment:Tv,alphamap_pars_fragment:wv,alphatest_fragment:Av,alphatest_pars_fragment:Ev,aomap_fragment:Rv,aomap_pars_fragment:Cv,batching_pars_vertex:Pv,batching_vertex:Iv,begin_vertex:Lv,beginnormal_vertex:Dv,bsdfs:Nv,iridescence_fragment:Ov,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:zv,color_fragment:Gv,color_pars_fragment:Vv,color_pars_vertex:Hv,color_vertex:Wv,common:Xv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:Kv,emissivemap_fragment:Zv,emissivemap_pars_fragment:Jv,colorspace_fragment:$v,colorspace_pars_fragment:jv,envmap_fragment:Qv,envmap_common_pars_fragment:eS,envmap_pars_fragment:tS,envmap_pars_vertex:nS,envmap_physical_pars_fragment:dS,envmap_vertex:iS,fog_vertex:sS,fog_pars_vertex:rS,fog_fragment:oS,fog_pars_fragment:aS,gradientmap_pars_fragment:lS,lightmap_pars_fragment:cS,lights_lambert_fragment:uS,lights_lambert_pars_fragment:hS,lights_pars_begin:fS,lights_toon_fragment:pS,lights_toon_pars_fragment:mS,lights_phong_fragment:gS,lights_phong_pars_fragment:_S,lights_physical_fragment:xS,lights_physical_pars_fragment:yS,lights_fragment_begin:vS,lights_fragment_maps:SS,lights_fragment_end:MS,lightprobes_pars_fragment:bS,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:wS,logdepthbuf_pars_vertex:AS,logdepthbuf_vertex:ES,map_fragment:RS,map_pars_fragment:CS,map_particle_fragment:PS,map_particle_pars_fragment:IS,metalnessmap_fragment:LS,metalnessmap_pars_fragment:DS,morphinstance_vertex:NS,morphcolor_vertex:OS,morphnormal_vertex:US,morphtarget_pars_vertex:FS,morphtarget_vertex:BS,normal_fragment_begin:kS,normal_fragment_maps:zS,normal_pars_fragment:GS,normal_pars_vertex:VS,normal_vertex:HS,normalmap_pars_fragment:WS,clearcoat_normal_fragment_begin:XS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:YS,iridescence_pars_fragment:KS,opaque_fragment:ZS,packing:JS,premultiplied_alpha_fragment:$S,project_vertex:jS,dithering_fragment:QS,dithering_pars_fragment:eM,roughnessmap_fragment:tM,roughnessmap_pars_fragment:nM,shadowmap_pars_fragment:iM,shadowmap_pars_vertex:sM,shadowmap_vertex:rM,shadowmask_pars_fragment:oM,skinbase_vertex:aM,skinning_pars_vertex:lM,skinning_vertex:cM,skinnormal_vertex:uM,specularmap_fragment:hM,specularmap_pars_fragment:fM,tonemapping_fragment:dM,tonemapping_pars_fragment:pM,transmission_fragment:mM,transmission_pars_fragment:gM,uv_pars_fragment:_M,uv_pars_vertex:xM,uv_vertex:yM,worldpos_vertex:vM,background_vert:SM,background_frag:MM,backgroundCube_vert:bM,backgroundCube_frag:TM,cube_vert:wM,cube_frag:AM,depth_vert:EM,depth_frag:RM,distance_vert:CM,distance_frag:PM,equirect_vert:IM,equirect_frag:LM,linedashed_vert:DM,linedashed_frag:NM,meshbasic_vert:OM,meshbasic_frag:UM,meshlambert_vert:FM,meshlambert_frag:BM,meshmatcap_vert:kM,meshmatcap_frag:zM,meshnormal_vert:GM,meshnormal_frag:VM,meshphong_vert:HM,meshphong_frag:WM,meshphysical_vert:XM,meshphysical_frag:qM,meshtoon_vert:YM,meshtoon_frag:KM,points_vert:ZM,points_frag:JM,shadow_vert:$M,shadow_frag:jM,sprite_vert:QM,sprite_frag:eb},Me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},hs={basic:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Un([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Un([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Un([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Un([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Un([Me.lights,Me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};hs.physical={uniforms:Un([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var ch={r:0,b:0,g:0},tb=new qe,z_=new Ve;z_.set(-1,0,0,0,1,0,0,0,1);function nb(s,e,t,n,i,r){let o=new Oe(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let v=S.backgroundBlurriness>0;A=e.get(A,v)}return A}function p(S){let A=!1,v=d(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),A=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,A){let v=d(A);v&&v.isCubeTexture?(c===void 0&&(c=new Jt(new oa(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:so(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(z_),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==gt,(u!==v||h!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jt(new pr(2,2),new ss({name:"BackgroundMaterial",uniforms:so(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(ch,Rd(s)),t.buffers.color.setClear(ch.r,ch.g,ch.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:_,dispose:g}}function ib(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(D,L,B,I,k){let W=!1,F=h(D,I,B,L);r!==F&&(r=F,c(r.object)),W=d(D,I,B,k),W&&p(D,I,B,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(D,L,B,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function u(D){return s.deleteVertexArray(D)}function h(D,L,B,I){let k=I.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let F=D.isInstancedMesh===!0?D.id:0,te=W[F];te===void 0&&(te={},W[F]=te);let q=te[B.id];q===void 0&&(q={},te[B.id]=q);let P=q[k];return P===void 0&&(P=f(l()),q[k]=P),P}function f(D){let L=[],B=[],I=[];for(let k=0;k<t;k++)L[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,L,B,I){let k=r.attributes,W=L.attributes,F=0,te=B.getAttributes();for(let q in te)if(te[q].location>=0){let ne=k[q],Se=W[q];if(Se===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function p(D,L,B,I){let k={},W=L.attributes,F=0,te=B.getAttributes();for(let q in te)if(te[q].location>=0){let ne=W[q];ne===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),k[q]=Se,F++}r.attributes=k,r.attributesNum=F,r.index=I}function _(){let D=r.newAttributes;for(let L=0,B=D.length;L<B;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),k[D]!==L&&(s.vertexAttribDivisor(D,L),k[D]=L)}function S(){let D=r.newAttributes,L=r.enabledAttributes;for(let B=0,I=L.length;B<I;B++)L[B]!==D[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function A(D,L,B,I,k,W,F){F===!0?s.vertexAttribIPointer(D,L,B,k,W):s.vertexAttribPointer(D,L,B,I,k,W)}function v(D,L,B,I){_();let k=I.attributes,W=B.getAttributes(),F=L.defaultAttributeValues;for(let te in W){let q=W[te];if(q.location>=0){let P=k[te];if(P===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let ne=P.normalized,Se=P.itemSize,Be=e.get(P);if(Be===void 0)continue;let Z=Be.buffer,ue=Be.type,ve=Be.bytesPerElement,we=ue===s.INT||ue===s.UNSIGNED_INT||P.gpuType===wu;if(P.isInterleavedBufferAttribute){let me=P.data,De=me.isInterleavedBuffer===!0?me.stride:me.itemSize,xt=P.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ae=0;Ae<q.locationSize;Ae++)g(q.location+Ae,me.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ae=0;Ae<q.locationSize;Ae++)m(q.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Ae=0;Ae<q.locationSize;Ae++)A(q.location+Ae,Se/q.locationSize,ue,ne,De*ve,(xt+Se/q.locationSize*Ae)*ve,we)}else{if(P.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)g(q.location+me,P.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let me=0;me<q.locationSize;me++)A(q.location+me,Se/q.locationSize,ue,ne,Se*ve,Se/q.locationSize*me*ve,we)}}else if(F!==void 0){let ne=F[te];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(q.location,ne);break;case 3:s.vertexAttrib3fv(q.location,ne);break;case 4:s.vertexAttrib4fv(q.location,ne);break;default:s.vertexAttrib1fv(q.location,ne)}}}}S()}function T(){E();for(let D in n){let L=n[D];for(let B in L){let I=L[B];for(let k in I){let W=I[k];for(let F in W)u(W[F].object),delete W[F];delete I[k]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let B in L){let I=L[B];for(let k in I){let W=I[k];for(let F in W)u(W[F].object),delete W[F];delete I[k]}}delete n[D.id]}function x(D){for(let L in n){let B=n[L];for(let I in B){let k=B[I];if(k[D.id]===void 0)continue;let W=k[D.id];for(let F in W)u(W[F].object),delete W[F];delete k[D.id]}}}function y(D){for(let L in n){let B=n[L],I=D.isInstancedMesh===!0?D.id:0,k=B[I];if(k!==void 0){for(let W in k){let F=k[W];for(let te in F)u(F[te].object),delete F[te];delete k[W]}delete B[I],Object.keys(B).length===0&&delete n[L]}}}function E(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function sb(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Oi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let y=x===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==oi&&x!==yi&&!y&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:T,samples:b}}function ob(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Ki,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=s.get(h);if(!i||p===null||p.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,A=S*4,v=g.clippingState||null;l.value=v,v=u(p,f,A,d);for(let T=0;T!==A;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,v=d;A!==_;++A,v+=4)o.copy(h[A]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var kl=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oa(5,5,5),r=new ss({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Qr});r.uniforms.tEquirect.value=t;let o=new Jt(i,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=hn),new ca(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},x_=256,ab=3,lb=20,G_=256,V_=16,cb=3,ub=new G,hb=new Oe,hh=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ca(1,10,null),this._boxMesh=new Jt(new oa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=ub}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(hb));let m=new ca(n,i,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(x_,wd(e))}_fromTexture(e,t){e.mapping===to||e.mapping===da?this._setSize(e.image.length===0?x_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=y_(e,!1,!1),n=Math.log2(e)-ab;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=y_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===to||e.mapping===da?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=v_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=fb(),this._integrationMaterial=db());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/V_);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-cb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(G_*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function y_(s,e,t){return new kl(s,{minFilter:Ni,generateMipmaps:e,type:$i,colorSpace:Xn,depthBuffer:t})}function zl(s,e,t){return new ss({name:s,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:bn,blending:Qr,depthTest:!1,depthWrite:!1})}function fb(){return zl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${G_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function db(){return zl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:V_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pb(){return zl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function v_(){return zl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function S_(){return zl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mb(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Mu||d===bu)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new kl(p.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Mu||d===bu,_=d===to||d===da;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new hh(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new hh(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Mu?f.mapping=to:d===bu&&(f.mapping=da),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function gb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Gr("WebGLRenderer: "+n+" extension not supported."),i}}}function _b(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],s.ARRAY_BUFFER)}function h(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let S=_!==null?_.array.length:m.array.length/3-1,A=m.count>=65535?ul:cl,v=new A(Math.ceil(S/3)*6,1),T=v.array;if(_!==null){let x=_.array;g=_.version;for(let y=0,E=0;y<S;y+=3){let R=x[y+0],D=x[y+1],L=x[y+2];T[E++]=R,T[E++]=D,T[E++]=D,T[E++]=L,T[E++]=L,T[E++]=R}}else{g=m.version;for(let x=0,y=0;x<S;x+=3){let E=x+0,R=x+1,D=x+2;T[y++]=E,T[y++]=R,T[y++]=R,T[y++]=D,T[y++]=D,T[y++]=E}}v.version=g;let b=r.get(p);b&&e.remove(b),r.set(p,v)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&h(p)}else h(p);return r.get(p)}function d(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function xb(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function yb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vb(s,e,t){let n=new WeakMap,i=new yt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let E=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),_===!0&&(A=3);let v=a.attributes.position.count*A,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*T*4*h),x=new rl(b,v,T,h);x.type=yi,x.needsUpdate=!0;let y=A*4;for(let R=0;R<h;R++){let D=m[R],L=g[R],B=S[R],I=v*T*4*R;for(let k=0;k<D.count;k++){let W=k*y;d===!0&&(i.fromBufferAttribute(D,k),b[I+W+0]=i.x,b[I+W+1]=i.y,b[I+W+2]=i.z,b[I+W+3]=0),p===!0&&(i.fromBufferAttribute(L,k),b[I+W+4]=i.x,b[I+W+5]=i.y,b[I+W+6]=i.z,b[I+W+7]=0),_===!0&&(i.fromBufferAttribute(B,k),b[I+W+8]=i.x,b[I+W+9]=i.y,b[I+W+10]=i.z,b[I+W+11]=B.itemSize===4?i.w:1)}}f={count:h,texture:x,size:new Ye(v,T)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Sb(s,e,t,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Mb={[sd]:"LINEAR_TONE_MAPPING",[rd]:"REINHARD_TONE_MAPPING",[od]:"CINEON_TONE_MAPPING",[ad]:"ACES_FILMIC_TONE_MAPPING",[cd]:"AGX_TONE_MAPPING",[ud]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function bb(s,e,t,n,i,r){let o=new xi(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new dn;u.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new uu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Jt(u,h),d=new $r(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,S=null,A=[],v=!1;this.setSize=function(T,b){o.setSize(T,b),a!==null&&a.setSize(T,b),l!==null&&l.setSize(T,b);for(let x=0;x<A.length;x++){let y=A[x];y.setSize&&y.setSize(T,b)}},this.setEffects=function(T){A=T,v=A.length>0&&A[0].isRenderPass===!0;let b=o.width,x=o.height;A.length>0&&a===null&&(a=new xi(b,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new xi(b,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}));let y=i===!0&&A.some(E=>E.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ds(b,x),r===!0&&(c.format=zs,c.type=io)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let E=0;E<A.length;E++){let R=A[E];R.setSize&&R.setSize(b,x),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,b){if(m||T.toneMapping===ls&&A.length===0)return!1;if(S=b,b!==null){let x=b.width,y=b.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return v===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=ls,!0},this.hasRenderPass=function(){return v},this.end=function(T,b){T.toneMapping=g,m=!0;let x=o,y=a;for(let E=0;E<A.length;E++){let R=A[E];R.enabled!==!1&&(R.render(T,y,x,b),R.needsSwap!==!1&&(x=y,y=y===a?l:a))}if(p!==T.outputColorSpace||_!==T.toneMapping){p=T.outputColorSpace,_=T.toneMapping,h.defines={},Je.getTransfer(p)===gt&&(h.defines.SRGB_TRANSFER="");let E=Mb[_];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(S),T.render(f,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var H_=new fn,W_=new Ds(1,1),X_=new _l(1),q_=new rl,Y_=new ou,K_=new gl,M_=[],b_=[],T_=new Float32Array(16),w_=new Float32Array(9),A_=new Float32Array(4);function ya(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=M_[i];if(r===void 0&&(r=new Float32Array(i),M_[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function dh(s,e){let t=b_[e];t===void 0&&(t=new Int32Array(e),b_[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Tb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function Ab(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function Eb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function Rb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;A_.set(n),s.uniformMatrix2fv(this.addr,!1,A_),mn(t,n)}}function Cb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;w_.set(n),s.uniformMatrix3fv(this.addr,!1,w_),mn(t,n)}}function Pb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;T_.set(n),s.uniformMatrix4fv(this.addr,!1,T_),mn(t,n)}}function Ib(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function Db(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function Nb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function Ob(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ub(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function Fb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function Bb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function ph(s){return s.version===0&&(s.compareFunction=Sd,s.needsUpdate=!0),s}function kb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ph(W_):r=H_,t.setTexture2D(e||r,i)}function zb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Y_,i)}function Gb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ph(X_):r=K_,t.setTextureCube(e||r,i)}function Vb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||q_,i)}function Hb(s){switch(s){case 5126:return Tb;case 35664:return wb;case 35665:return Ab;case 35666:return Eb;case 35674:return Rb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Ib;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return Ob;case 36294:return Ub;case 36295:return Fb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Vb}}function Wb(s,e){s.uniform1fv(this.addr,e)}function Xb(s,e){let t=ya(e,this.size,2);s.uniform2fv(this.addr,t)}function qb(s,e){let t=ya(e,this.size,3);s.uniform3fv(this.addr,t)}function Yb(s,e){let t=ya(e,this.size,4);s.uniform4fv(this.addr,t)}function Kb(s,e){let t=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zb(s,e){let t=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jb(s,e){let t=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $b(s,e){s.uniform1iv(this.addr,e)}function jb(s,e){s.uniform2iv(this.addr,e)}function Qb(s,e){s.uniform3iv(this.addr,e)}function eT(s,e){s.uniform4iv(this.addr,e)}function tT(s,e){s.uniform1uiv(this.addr,e)}function nT(s,e){s.uniform2uiv(this.addr,e)}function iT(s,e){s.uniform3uiv(this.addr,e)}function sT(s,e){s.uniform4uiv(this.addr,e)}function rT(s,e,t){let n=this.cache,i=e.length,r=dh(t,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ph(W_):o=H_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function oT(s,e,t){let n=this.cache,i=e.length,r=dh(t,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Y_,r[o])}function aT(s,e,t){let n=this.cache,i=e.length,r=dh(t,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=ph(X_):o=K_;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function lT(s,e,t){let n=this.cache,i=e.length,r=dh(t,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||q_,r[o])}function cT(s){switch(s){case 5126:return Wb;case 35664:return Xb;case 35665:return qb;case 35666:return Yb;case 35674:return Kb;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return $b;case 35667:case 35671:return jb;case 35668:case 35672:return Qb;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}var Nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hb(t.type)}},Od=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cT(t.type)}},Ud=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ld=/(\w+)(\])?(\[|\.)?/g;function E_(s,e){s.seq.push(e),s.map[e.id]=e}function uT(s,e,t){let n=s.name,i=n.length;for(Ld.lastIndex=0;;){let r=Ld.exec(n),o=Ld.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){E_(t,c===void 0?new Nd(a,s,e):new Od(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Ud(a),E_(t,h)),t=h}}}var xa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);uT(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function R_(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var hT=37297,fT=0;function dT(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var C_=new Ve;function pT(s){Je._getMatrix(C_,Je.workingColorSpace,s);let e=`mat3( ${C_.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case il:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function P_(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dT(s.getShaderSource(e),a)}else return r}function mT(s,e){let t=pT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gT={[sd]:"Linear",[rd]:"Reinhard",[od]:"Cineon",[ad]:"ACESFilmic",[cd]:"AgX",[ud]:"Neutral",[ld]:"Custom"};function _T(s,e){let t=gT[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uh=new G;function xT(){Je.getLuminanceCoefficients(uh);let s=uh.x.toFixed(4),e=uh.y.toFixed(4),t=uh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function vT(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ST(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Bl(s){return s!==""}function I_(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function L_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(s){return s.replace(MT,bT)}function bT(s,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Fd(t)}var TT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(s){return s.replace(TT,wT)}function wT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function N_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var AT={[El]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function ET(s){return AT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RT={[da]:"ENVMAP_MODE_REFRACTION"};function CT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":RT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var PT={[id]:"ENVMAP_BLENDING_MULTIPLY",[Zg]:"ENVMAP_BLENDING_MIX",[Jg]:"ENVMAP_BLENDING_ADD"};function IT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":PT[s.combine]||"ENVMAP_BLENDING_NONE"}function LT(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ET(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=CT(t),h=IT(t),f=yT(t),d=vT(r),p=i.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Bl).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Bl).join(`
`),m.length>0&&(m+=`
`)):(_=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),m=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ls?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,mT("linearToOutputTexel",t.outputColorSpace),xT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bl).join(`
`)),o=Fd(o),o=I_(o,t),o=L_(o,t),a=Fd(a),a=I_(a,t),a=L_(a,t),o=D_(o),a=D_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=g+_+o,A=g+m+a,v=R_(i,i.VERTEX_SHADER,S),T=R_(i,i.FRAGMENT_SHADER,A);i.attachShader(p,v),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(v)||"",B=i.getShaderInfoLog(T)||"",I=D.trim(),k=L.trim(),W=B.trim(),F=!0,te=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,T);else{let q=P_(i,v,"vertex"),P=P_(i,T,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+q+`
`+P)}else I!==""?Fe("WebGLProgram: Program Info Log:",I):(k===""||W==="")&&(te=!1);te&&(R.diagnostics={runnable:F,programLog:I,vertexShader:{log:k,prefix:_},fragmentShader:{log:W,prefix:m}})}i.deleteShader(v),i.deleteShader(T),x=new xa(i,p),y=ST(i,p)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(p,hT)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}var DT=0,Bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kd(e),t.set(e,n)),n}},kd=class{constructor(e){this.id=DT++,this.code=e,this.usedTimes=0}};function NT(s){return s===gr||s===Ll||s===Dl}function OT(s,e,t,n,i,r){let o=new ol,a=new Bd,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,E,R,D,L){let B=R.fog,I=D.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||k,W),te=f[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ne=P!==void 0?P.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Be,Z,ue,ve;if(te){let ee=hs[te];Be=ee.vertexShader,Z=ee.fragmentShader}else{Be=x.vertexShader,Z=x.fragmentShader;let ee=a.getVertexShaderStage(x),be=a.getFragmentShaderStage(x);a.update(x,ee,be),ue=ee.id,ve=be.id}let we=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,xt=D.isBatchedMesh===!0,Ae=!!x.map,He=!!x.matcap,Ie=!!F,Ue=Ie&&F.isPMREMTexture===!0,ht=!!x.aoMap,lt=!!x.lightMap,K=!!x.bumpMap&&x.wireframe===!1,tt=!!x.normalMap,jt=!!x.displacementMap,Mt=!!x.emissiveMap,ot=!!x.metalnessMap,Ht=!!x.roughnessMap,Zt=x.anisotropy>0,U=x.clearcoat>0,dt=x.diffuseRoughness>0,ct=x.dispersion>0,Ge=x.retroreflectivity>0,he=x.iridescence>0,ft=x.sheen>0,Le=x.transmission>0,ke=Zt&&!!x.anisotropyMap,C=U&&!!x.clearcoatMap,M=U&&!!x.clearcoatNormalMap,V=U&&!!x.clearcoatRoughnessMap,re=dt&&!!x.diffuseRoughnessMap,ie=he&&!!x.iridescenceMap,ce=he&&!!x.iridescenceThicknessMap,ge=ft&&!!x.sheenColorMap,H=ft&&!!x.sheenRoughnessMap,j=!!x.specularMap,le=!!x.specularColorMap,N=!!x.specularIntensityMap,$=Le&&!!x.transmissionMap,J=Le&&!!x.thicknessMap,fe=!!x.gradientMap,ae=!!x.alphaMap,de=x.alphaTest>0,oe=!!x.alphaHash,pe=!!x.extensions,se=ls;x.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(se=s.toneMapping);let Q=Ue?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,_e={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:Z,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:xt,batchingColor:xt&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:He,envMap:Ie,envMapMode:Ie&&F.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?Q.length-1:null,envMapSize:Ue?Q[0].width:null,aoMap:ht,lightMap:lt,bumpMap:K,normalMap:tt,displacementMap:jt,emissiveMap:Mt,normalMapObjectSpace:tt&&x.normalMapType===i_,normalMapTangentSpace:tt&&x.normalMapType===Ol,packedNormalMap:tt&&x.normalMapType===Ol&&NT(x.normalMap.format),metalnessMap:ot,roughnessMap:Ht,anisotropy:Zt,anisotropyMap:ke,clearcoat:U,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:V,diffuseRoughness:dt,diffuseRoughnessMap:re,dispersion:ct,retroreflection:Ge,iridescence:he,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:ft,sheenColorMap:ge,sheenRoughnessMap:H,specularMap:j,specularColorMap:le,specularIntensityMap:N,transmission:Le,transmissionMap:$,thicknessMap:J,gradientMap:fe,opaque:x.transparent===!1&&x.blending===fa&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:de,alphaHash:oe,combine:x.combine,mapUv:Ae&&d(x.map.channel),aoMapUv:ht&&d(x.aoMap.channel),lightMapUv:lt&&d(x.lightMap.channel),bumpMapUv:K&&d(x.bumpMap.channel),normalMapUv:tt&&d(x.normalMap.channel),displacementMapUv:jt&&d(x.displacementMap.channel),emissiveMapUv:Mt&&d(x.emissiveMap.channel),metalnessMapUv:ot&&d(x.metalnessMap.channel),roughnessMapUv:Ht&&d(x.roughnessMap.channel),anisotropyMapUv:ke&&d(x.anisotropyMap.channel),clearcoatMapUv:C&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:H&&d(x.sheenRoughnessMap.channel),specularMapUv:j&&d(x.specularMap.channel),specularColorMapUv:le&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:$&&d(x.transmissionMap.channel),thicknessMapUv:J&&d(x.thicknessMap.channel),alphaMapUv:ae&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(tt||Zt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ae||ae),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:L.filter(ee=>ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function _(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let E in x.defines)y.push(E),y.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(m(y,x),g(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){let y=f[x.type],E;if(y){let R=hs[y];E=m_.clone(R.uniforms)}else E=x.uniforms;return E}function A(x,y){let E=u.get(y);return E!==void 0?++E.usedTimes:(E=new LT(s,y,x,i),c.push(E),u.set(y,E)),E}function v(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:A,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:b}}function UT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function FT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function O_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function U_(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},s[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=m,S.group=g),e++,S}function l(f,d,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);let A=a(f,d,p,_,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):t.push(A)}function c(f,d,p,_,m,g){let S=a(f,d,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function u(f,d){t.length>1&&t.sort(f||FT),n.length>1&&n.sort(d||O_),i.length>1&&i.sort(d||O_)}function h(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function BT(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new U_,s.set(n,[o])):i>=r.length?(o=new U_,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Oe};break;case"SpotLight":t={position:new G,direction:new G,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function zT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var GT=0;function VT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function HT(s){let e=new kT,t=zT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,r=new qe,o=new qe;function a(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,S=0,A=0,v=0,T=0,b=0,x=0,y=0,E=0,R=0;c.sort(VT);for(let L=0,B=c.length;L<B;L++){let I=c[L],k=I.color,W=I.intensity,F=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gr?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*W,h+=k.g*W,f+=k.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],W);R++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,ne=t.get(I);ne.shadowIntensity=P.intensity,ne.shadowBias=P.bias,ne.shadowNormalBias=P.normalBias,ne.shadowRadius=P.radius,ne.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=te;let Se=P.getViewportCount();for(let Be=0;Be<Se;Be++)n.sunShadowMatrix[_+Be]=P.getMatrix(Be),n.sunShadowCascade[_+Be]=P._cascadeData[Be];_+=Se,p++}n.sun[d]=q,d++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,ne=t.get(I);ne.shadowIntensity=P.intensity,ne.shadowBias=P.bias,ne.shadowNormalBias=P.normalBias,ne.shadowRadius=P.radius,ne.shadowMapSize=P.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=q,m++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(W),q.distance=F,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[S]=q;let P=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,P.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[S]=P.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=P.intensity,ne.shadowBias=P.bias,ne.shadowNormalBias=P.normalBias,ne.shadowRadius=P.radius,ne.shadowMapSize=P.mapSize,n.spotShadow[S]=ne,n.spotShadowMap[S]=te,x++}S++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(k).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=q,A++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let P=I.shadow,ne=t.get(I);ne.shadowIntensity=P.intensity,ne.shadowBias=P.bias,ne.shadowNormalBias=P.normalBias,ne.shadowRadius=P.radius,ne.shadowMapSize=P.mapSize,ne.shadowCameraNear=P.camera.near,ne.shadowCameraFar=P.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[v]=q,v++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==y||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=y,D.numLightProbes=R,n.version=GT++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let v=c[S];if(v.isSunLight){let T=n.sun[h];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(v.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function F_(s){let e=new HT(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function WT(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new F_(s),e.set(i,[a])):r>=o.length?(a=new F_(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YT=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],KT=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],B_=new qe,Fl=new G,Dd=new G;function ZT(s,e,t){let n=new dr,i=new Ye,r=new Ye,o=new yt,a=new hu,l=new fu,c={},u=t.maxTextureSize,h={[as]:bn,[bn]:as,[ri]:ri},f=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:XT,fragmentShader:qT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new dn;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Jt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let g=this.type;this.render=function(b,x,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Pg&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=El);let E=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Qr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=g!==this.type;B&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=b.length;I<k;I++){let W=b[I],F=W.shadow;if(F===void 0){Fe("WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let te=F.getFrameExtents();i.multiply(te),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,F.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=q,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ha){if(W.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new xi(i.x,i.y,{format:gr,type:$i,minFilter:hn,magFilter:hn,generateMipmaps:!1}),F.map.texture.name=W.name+".shadowMap",F.map.depthTexture=new Ds(i.x,i.y,yi),F.map.depthTexture.name=W.name+".shadowMapDepth",F.map.depthTexture.format=Cs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt}else W.isPointLight?(F.map=new kl(i.x),F.map.depthTexture=new _l(i.x,Ji)):(F.map=new xi(i.x,i.y),F.map.depthTexture=new Ds(i.x,i.y,Ji)),F.map.depthTexture.name=W.name+".shadowMap",F.map.depthTexture.format=Cs,this.type===El?(F.map.depthTexture.compareFunction=q?vd:yd,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let P=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();W.isPointLight!==!0&&F.updateMatrices(W,y);let ne=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:y.layers;for(let Se=0;Se<P;Se++){let Be=F.getCamera(Se);if(W.isPointLight){let Z=F.camera,ue=F.matrix,ve=W.distance||Z.far;ve!==Z.far&&(Z.far=ve,Z.updateProjectionMatrix()),Fl.setFromMatrixPosition(W.matrixWorld),Z.position.copy(Fl),Dd.copy(Z.position),Dd.add(YT[Se]),Z.up.copy(KT[Se]),Z.lookAt(Dd),Z.updateMatrixWorld(),ue.makeTranslation(-Fl.x,-Fl.y,-Fl.z),B_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(B_,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(F.map),s.clear());let Z=F.getViewport(Se);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),L.viewport(o)}n=F.getFrustum(Se),v(x,y,Be,W,ne,this.type)}F.isPointLightShadow!==!0&&this.type===ha&&S(F,y),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,R,D)};function S(b,x){let y=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new xi(i.x,i.y,{format:gr,type:$i}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(x,null,y,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(x,null,y,d,_,null)}function A(b,x,y,E){let R=null,D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=R.uuid,B=x.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let k=I[B];k===void 0&&(k=R.clone(),I[B]=k,x.addEventListener("dispose",T)),R=k}if(R.visible=x.visible,R.wireframe=x.wireframe,E===ha?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:h[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=y}return R}function v(b,x,y,E,R,D){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===ha)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let I=e.update(b),k=b.material;if(Array.isArray(k)){let W=I.groups;for(let F=0,te=W.length;F<te;F++){let q=W[F],P=k[q.materialIndex];if(P&&P.visible){let ne=A(b,P,E,D);b.onBeforeShadow(s,b,x,y,I,ne,q),s.renderBufferDirect(y,null,I,ne,b,q),b.onAfterShadow(s,b,x,y,I,ne,q)}}}else if(k.visible){let W=A(b,k,E,D);b.onBeforeShadow(s,b,x,y,I,W,null),s.renderBufferDirect(y,null,I,W,b,null),b.onAfterShadow(s,b,x,y,I,W,null)}}let B=b.children;for(let I=0,k=B.length;I<k;I++)v(B[I],x,y,E,R,D)}function T(b){b.target.removeEventListener("dispose",T);for(let y in c){let E=c[y],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function JT(s,e){function t(){let N=!1,$=new yt,J=null,fe=new yt(0,0,0,0);return{setMask:function(ae){J!==ae&&!N&&(s.colorMask(ae,ae,ae,ae),J=ae)},setLocked:function(ae){N=ae},setClear:function(ae,de,oe,pe,se){se===!0&&(ae*=pe,de*=pe,oe*=pe),$.set(ae,de,oe,pe),fe.equals($)===!1&&(s.clearColor(ae,de,oe,pe),fe.copy($))},reset:function(){N=!1,J=null,fe.set(-1,0,0,0)}}}function n(){let N=!1,$=!1,J=null,fe=null,ae=null;return{setReversed:function(de){if($!==de){let oe=e.get("EXT_clip_control");de?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),$=de;let pe=ae;ae=null,this.setClear(pe)}},getReversed:function(){return $},setTest:function(de){de?me(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(de){J!==de&&!N&&(s.depthMask(de),J=de)},setFunc:function(de){if($&&(de=d_[de]),fe!==de){switch(de){case $c:s.depthFunc(s.NEVER);break;case jc:s.depthFunc(s.ALWAYS);break;case Qc:s.depthFunc(s.LESS);break;case Yo:s.depthFunc(s.LEQUAL);break;case eu:s.depthFunc(s.EQUAL);break;case tu:s.depthFunc(s.GEQUAL);break;case nu:s.depthFunc(s.GREATER);break;case iu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=de}},setLocked:function(de){N=de},setClear:function(de){ae!==de&&(ae=de,$&&(de=1-de),s.clearDepth(de))},reset:function(){N=!1,J=null,fe=null,ae=null,$=!1}}}function i(){let N=!1,$=null,J=null,fe=null,ae=null,de=null,oe=null,pe=null,se=null;return{setTest:function(Q){N||(Q?me(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Q){$!==Q&&!N&&(s.stencilMask(Q),$=Q)},setFunc:function(Q,_e,ee){(J!==Q||fe!==_e||ae!==ee)&&(s.stencilFunc(Q,_e,ee),J=Q,fe=_e,ae=ee)},setOp:function(Q,_e,ee){(de!==Q||oe!==_e||pe!==ee)&&(s.stencilOp(Q,_e,ee),de=Q,oe=_e,pe=ee)},setLocked:function(Q){N=Q},setClear:function(Q){se!==Q&&(s.clearStencil(Q),se=Q)},reset:function(){N=!1,$=null,J=null,fe=null,ae=null,de=null,oe=null,pe=null,se=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,S=null,A=null,v=null,T=null,b=null,x=null,y=new Oe(0,0,0),E=0,R=!1,D=null,L=null,B=null,I=null,k=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,te=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=te>=2);let P=null,ne={},Se=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),Z=new yt().fromArray(Se),ue=new yt().fromArray(Be);function ve(N,$,J,fe){let ae=new Uint8Array(4),de=s.createTexture();s.bindTexture(N,de),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<J;oe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D($+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return de}let we={};we[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(s.DEPTH_TEST),o.setFunc(Yo),K(!1),tt($f),me(s.CULL_FACE),ht(Qr);function me(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function De(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function xt(N,$){return f[N]!==$?(s.bindFramebuffer(N,$),f[N]=$,N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=$),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=$),!0):!1}function Ae(N,$){let J=p,fe=!1;if(N){J=d.get($),J===void 0&&(J=[],d.set($,J));let ae=N.textures;if(J.length!==ae.length||J[0]!==s.COLOR_ATTACHMENT0){for(let de=0,oe=ae.length;de<oe;de++)J[de]=s.COLOR_ATTACHMENT0+de;J.length=ae.length,fe=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,fe=!0);fe&&s.drawBuffers(J)}function He(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let Ie={[eo]:s.FUNC_ADD,[Lg]:s.FUNC_SUBTRACT,[Dg]:s.FUNC_REVERSE_SUBTRACT};Ie[Ng]=s.MIN,Ie[Og]=s.MAX;let Ue={[Ug]:s.ZERO,[Fg]:s.ONE,[Bg]:s.SRC_COLOR,[td]:s.SRC_ALPHA,[Wg]:s.SRC_ALPHA_SATURATE,[Vg]:s.DST_COLOR,[zg]:s.DST_ALPHA,[kg]:s.ONE_MINUS_SRC_COLOR,[nd]:s.ONE_MINUS_SRC_ALPHA,[Hg]:s.ONE_MINUS_DST_COLOR,[Gg]:s.ONE_MINUS_DST_ALPHA,[Xg]:s.CONSTANT_COLOR,[qg]:s.ONE_MINUS_CONSTANT_COLOR,[Yg]:s.CONSTANT_ALPHA,[Kg]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(N,$,J,fe,ae,de,oe,pe,se,Q){if(N===Qr){m===!0&&(De(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),N!==Ig){if(N!==g||Q!==R){if((S!==eo||T!==eo)&&(s.blendEquation(s.FUNC_ADD),S=eo,T=eo),Q)switch(N){case fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFunc(s.ONE,s.ONE);break;case Qf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ed:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",N);break}else switch(N){case fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qf:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",N);break}A=null,v=null,b=null,x=null,y.set(0,0,0),E=0,g=N,R=Q}return}ae=ae||$,de=de||J,oe=oe||fe,($!==S||ae!==T)&&(s.blendEquationSeparate(Ie[$],Ie[ae]),S=$,T=ae),(J!==A||fe!==v||de!==b||oe!==x)&&(s.blendFuncSeparate(Ue[J],Ue[fe],Ue[de],Ue[oe]),A=J,v=fe,b=de,x=oe),(pe.equals(y)===!1||se!==E)&&(s.blendColor(pe.r,pe.g,pe.b,se),y.copy(pe),E=se),g=N,R=!1}function lt(N,$){N.side===ri?De(s.CULL_FACE):me(s.CULL_FACE);let J=N.side===bn;$&&(J=!J),K(J),N.blending===fa&&N.transparent===!1?ht(Qr):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let fe=N.stencilWrite;a.setTest(fe),fe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function tt(N){N!==Rg?(me(s.CULL_FACE),N!==L&&(N===$f?s.cullFace(s.BACK):N===Cg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),L=N}function jt(N){N!==B&&(F&&s.lineWidth(N),B=N)}function Mt(N,$,J){N?(me(s.POLYGON_OFFSET_FILL),(I!==$||k!==J)&&(I=$,k=J,o.getReversed()&&($=-$,J=-J),s.polygonOffset($,J))):De(s.POLYGON_OFFSET_FILL)}function ot(N){N?me(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Ht(N){N===void 0&&(N=s.TEXTURE0+W-1),P!==N&&(s.activeTexture(N),P=N)}function Zt(N,$,J){J===void 0&&(P===null?J=s.TEXTURE0+W-1:J=P);let fe=ne[J];fe===void 0&&(fe={type:void 0,texture:void 0},ne[J]=fe),(fe.type!==N||fe.texture!==$)&&(P!==J&&(s.activeTexture(J),P=J),s.bindTexture(N,$||we[N]),fe.type=N,fe.texture=$)}function U(){let N=ne[P];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function dt(){try{s.compressedTexImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function ct(){try{s.compressedTexImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function Ge(){try{s.texSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function he(){try{s.texSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function Le(){try{s.compressedTexSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ke(){try{s.texStorage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function M(){try{s.texImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function V(){try{s.texImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function re(N){return h[N]!==void 0?h[N]:s.getParameter(N)}function ie(N,$){h[N]!==$&&(s.pixelStorei(N,$),h[N]=$)}function ce(N){Z.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function ge(N){ue.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function H(N,$){let J=c.get($);J===void 0&&(J=new WeakMap,c.set($,J));let fe=J.get(N);fe===void 0&&(fe=s.getUniformBlockIndex($,N.name),s.uniformBlockBinding($,fe,fe),J.set(N,fe))}function j(N,$,J){let ae=c.get($).get(N);l[ae]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,ae,J),l[ae]=J)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},P=null,ne={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,S=null,A=null,v=null,T=null,b=null,x=null,y=new Oe(0,0,0),E=0,R=!1,D=null,L=null,B=null,I=null,k=null,Z.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:De,bindFramebuffer:xt,drawBuffers:Ae,useProgram:He,setBlending:ht,setMaterial:lt,setFlipSided:K,setCullFace:tt,setLineWidth:jt,setPolygonOffset:Mt,setScissorTest:ot,activeTexture:Ht,bindTexture:Zt,unbindTexture:U,compressedTexImage2D:dt,compressedTexImage3D:ct,texImage2D:M,texImage3D:V,pixelStorei:ie,getParameter:re,updateUBOMapping:H,uniformBlockBinding:j,texStorage2D:ke,texStorage3D:C,texSubImage2D:Ge,texSubImage3D:he,compressedTexSubImage2D:ft,compressedTexSubImage3D:Le,scissor:ce,viewport:ge,reset:le}}function $T(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,h=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return m?new OffscreenCanvas(C,M):Jo("canvas")}function S(C,M,V){let re=1,ie=ke(C);if((ie.width>V||ie.height>V)&&(re=V/Math.max(ie.width,ie.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ce=Math.floor(re*ie.width),ge=Math.floor(re*ie.height);f===void 0&&(f=g(ce,ge));let H=M?g(ce,ge):f;return H.width=ce,H.height=ge,H.getContext("2d").drawImage(C,0,0,ce,ge),Fe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+ge+")."),H}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function A(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,M,V,re,ie,ce=!1){if(C!==null){if(s[C]!==void 0)return s[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;re&&(ge=e.get("EXT_texture_norm16"),ge||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=M;if(M===s.RED&&(V===s.FLOAT&&(H=s.R32F),V===s.HALF_FLOAT&&(H=s.R16F),V===s.UNSIGNED_BYTE&&(H=s.R8),V===s.UNSIGNED_SHORT&&ge&&(H=ge.R16_EXT),V===s.SHORT&&ge&&(H=ge.R16_SNORM_EXT)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(H=s.R8UI),V===s.UNSIGNED_SHORT&&(H=s.R16UI),V===s.UNSIGNED_INT&&(H=s.R32UI),V===s.BYTE&&(H=s.R8I),V===s.SHORT&&(H=s.R16I),V===s.INT&&(H=s.R32I)),M===s.RG&&(V===s.FLOAT&&(H=s.RG32F),V===s.HALF_FLOAT&&(H=s.RG16F),V===s.UNSIGNED_BYTE&&(H=s.RG8),V===s.UNSIGNED_SHORT&&ge&&(H=ge.RG16_EXT),V===s.SHORT&&ge&&(H=ge.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(H=s.RG8UI),V===s.UNSIGNED_SHORT&&(H=s.RG16UI),V===s.UNSIGNED_INT&&(H=s.RG32UI),V===s.BYTE&&(H=s.RG8I),V===s.SHORT&&(H=s.RG16I),V===s.INT&&(H=s.RG32I)),M===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(H=s.RGB8UI),V===s.UNSIGNED_SHORT&&(H=s.RGB16UI),V===s.UNSIGNED_INT&&(H=s.RGB32UI),V===s.BYTE&&(H=s.RGB8I),V===s.SHORT&&(H=s.RGB16I),V===s.INT&&(H=s.RGB32I)),M===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),V===s.UNSIGNED_INT&&(H=s.RGBA32UI),V===s.BYTE&&(H=s.RGBA8I),V===s.SHORT&&(H=s.RGBA16I),V===s.INT&&(H=s.RGBA32I)),M===s.RGB&&(V===s.UNSIGNED_SHORT&&ge&&(H=ge.RGB16_EXT),V===s.SHORT&&ge&&(H=ge.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),M===s.RGBA){let j=ce?il:Je.getTransfer(ie);V===s.FLOAT&&(H=s.RGBA32F),V===s.HALF_FLOAT&&(H=s.RGBA16F),V===s.UNSIGNED_BYTE&&(H=j===gt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&ge&&(H=ge.RGBA16_EXT),V===s.SHORT&&ge&&(H=ge.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(C,M){let V;return C?M===null||M===Ji||M===io?V=s.DEPTH24_STENCIL8:M===yi?V=s.DEPTH32F_STENCIL8:M===ma&&(V=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===io?V=s.DEPTH_COMPONENT24:M===yi?V=s.DEPTH_COMPONENT32F:M===ma&&(V=s.DEPTH_COMPONENT16),V}function y(C,M){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){let M=new WeakRef(C);n.get(C).__ref=M,p.add(M),_.register(C,M,M)}function R(C){let M=n.get(C).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function D(C){B(C.target)}function L(C){I(C.target)}function B(C){C.removeEventListener("dispose",D),R(C),W(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function I(C){C.removeEventListener("dispose",L),R(C),te(C)}function k(){for(let C of p){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):B(M))}p.clear(),h.clear()}function W(C){let M=n.get(C);if(M.__webglInit===void 0)return;let V=C.source,re=d.get(V);if(re){let ie=re[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(C),Object.keys(re).length===0&&d.delete(V)}n.remove(C)}function F(C){let M=n.get(C);s.deleteTexture(M.__webglTexture);let V=C.source,re=d.get(V);delete re[M.__cacheKey],o.memory.textures--}function te(C){let M=n.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&B(V),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ce=0;ce<M.__webglFramebuffer[ie].length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[ie][ce]);else s.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)s.deleteFramebuffer(M.__webglFramebuffer[ie]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let re=C.textures;for(let ie=0,ce=re.length;ie<ce;ie++){let ge=n.get(re[ie]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(re[ie])}n.remove(C)}let q=0;function P(){q=0}function ne(){return q}function Se(C){q=C}function Be(){let C=q;return C>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,C}function Z(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ue(C,M){let V=n.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let re=C.image;if(re===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function ve(C,M){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){lt(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function we(C,M){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){lt(V,C,M);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function me(C,M){let V=n.get(C);if(C.version>0&&V.__version!==C.version){K(V,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}let De={[hr]:s.REPEAT,[Ii]:s.CLAMP_TO_EDGE,[Ko]:s.MIRRORED_REPEAT},xt={[Bt]:s.NEAREST,[Tu]:s.NEAREST_MIPMAP_NEAREST,[no]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[pa]:s.LINEAR_MIPMAP_NEAREST,[Ni]:s.LINEAR_MIPMAP_LINEAR},Ae={[r_]:s.NEVER,[Sd]:s.ALWAYS,[o_]:s.LESS,[yd]:s.LEQUAL,[a_]:s.EQUAL,[vd]:s.GEQUAL,[l_]:s.GREATER,[c_]:s.NOTEQUAL};function He(C,M){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===pa||M.magFilter===no||M.magFilter===Ni||M.minFilter===hn||M.minFilter===pa||M.minFilter===no||M.minFilter===Ni)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,De[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,De[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,De[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,xt[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==no&&M.minFilter!==Ni||M.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",D),E(M));let re=M.source,ie=d.get(re);ie===void 0&&(ie={},d.set(re,ie));let ce=Z(M);if(ce!==C.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[ce].usedTimes++;let ge=ie[C.__cacheKey];ge!==void 0&&(ie[C.__cacheKey].usedTimes--,ge.usedTimes===0&&F(M)),C.__cacheKey=ce,C.__webglTexture=ie[ce].texture}return V}function Ue(C,M,V){return Math.floor(Math.floor(C/V)/M)}function ht(C,M,V,re){let ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,V,re,M.data);else{ce.sort((N,$)=>N.start-$.start);let ge=0;for(let N=1;N<ce.length;N++){let $=ce[ge],J=ce[N],fe=$.start+$.count,ae=Ue(J.start,M.width,4),de=Ue($.start,M.width,4);J.start<=fe+1&&ae===de&&Ue(J.start+J.count-1,M.width,4)===ae?$.count=Math.max($.count,J.start+J.count-$.start):(++ge,ce[ge]=J)}ce.length=ge+1;let H=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let N=0,$=ce.length;N<$;N++){let J=ce[N],fe=Math.floor(J.start/4),ae=Math.ceil(J.count/4),de=fe%M.width,oe=Math.floor(fe/M.width),pe=ae,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe),t.texSubImage2D(s.TEXTURE_2D,0,de,oe,pe,se,V,re,M.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,H),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function lt(C,M,V){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);let ie=Ie(C,M),ce=M.source;t.bindTexture(re,C.__webglTexture,s.TEXTURE0+V);let ge=n.get(ce);if(ce.version!==ge.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),Q=M.colorSpace===Gs?null:Je.getPrimaries(M.colorSpace),_e=M.colorSpace===Gs||se===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let j=S(M.image,!1,i.maxTextureSize);j=Le(M,j);let le=r.convert(M.format,M.colorSpace),N=r.convert(M.type),$=b(M.internalFormat,le,N,M.normalized,M.colorSpace,M.isVideoTexture);He(re,M);let J,fe=M.mipmaps,ae=M.isVideoTexture!==!0,de=ge.__version===void 0||ie===!0,oe=ce.dataReady,pe=y(M,j);if(M.isDepthTexture)$=x(M.format===zs,M.type),de&&(ae?t.texStorage2D(s.TEXTURE_2D,1,$,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,$,j.width,j.height,0,le,N,null));else if(M.isDataTexture)if(fe.length>0){ae&&de&&t.texStorage2D(s.TEXTURE_2D,pe,$,fe[0].width,fe[0].height);for(let se=0,Q=fe.length;se<Q;se++)J=fe[se],ae?oe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,J.width,J.height,le,N,J.data):t.texImage2D(s.TEXTURE_2D,se,$,J.width,J.height,0,le,N,J.data);M.generateMipmaps=!1}else ae?(de&&t.texStorage2D(s.TEXTURE_2D,pe,$,j.width,j.height),oe&&ht(M,j,le,N)):t.texImage2D(s.TEXTURE_2D,0,$,j.width,j.height,0,le,N,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,$,fe[0].width,fe[0].height,j.depth);for(let se=0,Q=fe.length;se<Q;se++)if(J=fe[se],M.format!==Oi)if(le!==null)if(ae){if(oe)if(M.layerUpdates.size>0){let _e=Id(J.width,J.height,M.format,M.type);for(let ee of M.layerUpdates){let be=J.data.subarray(ee*_e/J.data.BYTES_PER_ELEMENT,(ee+1)*_e/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,ee,J.width,J.height,1,le,be)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,j.depth,le,J.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,$,J.width,J.height,j.depth,0,J.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,j.depth,le,N,J.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,$,J.width,J.height,j.depth,0,le,N,J.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ae&&de&&t.texStorage2D(s.TEXTURE_2D,pe,$,fe[0].width,fe[0].height);for(let se=0,Q=fe.length;se<Q;se++)J=fe[se],M.format!==Oi?le!==null?ae?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,J.width,J.height,le,J.data):t.compressedTexImage2D(s.TEXTURE_2D,se,$,J.width,J.height,0,J.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?oe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,J.width,J.height,le,N,J.data):t.texImage2D(s.TEXTURE_2D,se,$,J.width,J.height,0,le,N,J.data)}else if(M.isDataArrayTexture)if(ae){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,$,j.width,j.height,j.depth),oe)if(M.layerUpdates.size>0){let se=Id(j.width,j.height,M.format,M.type);for(let Q of M.layerUpdates){let _e=j.data.subarray(Q*se/j.data.BYTES_PER_ELEMENT,(Q+1)*se/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,j.width,j.height,1,le,N,_e)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,N,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$,j.width,j.height,j.depth,0,le,N,j.data);else if(M.isData3DTexture)ae?(de&&t.texStorage3D(s.TEXTURE_3D,pe,$,j.width,j.height,j.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,N,j.data)):t.texImage3D(s.TEXTURE_3D,0,$,j.width,j.height,j.depth,0,le,N,j.data);else if(M.isFramebufferTexture){if(de)if(ae)t.texStorage2D(s.TEXTURE_2D,pe,$,j.width,j.height);else{let se=j.width,Q=j.height;for(let _e=0;_e<pe;_e++)t.texImage2D(s.TEXTURE_2D,_e,$,se,Q,0,le,N,null),se>>=1,Q>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),j.parentNode!==se){se.appendChild(j),h.add(M),se.onpaint=Q=>{let _e=Q.changedElements;for(let ee of h)_e.includes(ee.image)&&(ee.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let _e=s.RGBA,ee=s.RGBA,be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,ee,be,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ae&&de){let se=ke(fe[0]);t.texStorage2D(s.TEXTURE_2D,pe,$,se.width,se.height)}for(let se=0,Q=fe.length;se<Q;se++)J=fe[se],ae?oe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,le,N,J):t.texImage2D(s.TEXTURE_2D,se,$,le,N,J);M.generateMipmaps=!1}else if(ae){if(de){let se=ke(j);t.texStorage2D(s.TEXTURE_2D,pe,$,se.width,se.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,N,j)}else t.texImage2D(s.TEXTURE_2D,0,$,le,N,j);A(M)&&M.mipmapsAutoUpdate===!0&&v(re),ge.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function K(C,M,V){if(M.image.length!==6)return;let re=Ie(C,M),ie=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);let ce=n.get(ie);if(ie.version!==ce.__version||re===!0){t.activeTexture(s.TEXTURE0+V);let ge=Je.getPrimaries(Je.workingColorSpace),H=M.colorSpace===Gs?null:Je.getPrimaries(M.colorSpace),j=M.colorSpace===Gs||ge===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let le=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,$=[];for(let ee=0;ee<6;ee++)!le&&!N?$[ee]=S(M.image[ee],!0,i.maxCubemapSize):$[ee]=N?M.image[ee].image:M.image[ee],$[ee]=Le(M,$[ee]);let J=$[0],fe=r.convert(M.format,M.colorSpace),ae=r.convert(M.type),de=b(M.internalFormat,fe,ae,M.normalized,M.colorSpace),oe=M.isVideoTexture!==!0,pe=ce.__version===void 0||re===!0,se=ie.dataReady,Q=y(M,J);He(s.TEXTURE_CUBE_MAP,M);let _e;if(M.isDepthTexture){if(de=x(M.format===zs,M.type),pe)if(oe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,de,J.width,J.height);else for(let ee=0;ee<6;ee++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,J.width,J.height,0,fe,ae,null)}else if(le){oe&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Q,de,J.width,J.height);for(let ee=0;ee<6;ee++){_e=$[ee].mipmaps;for(let be=0;be<_e.length;be++){let nt=_e[be];M.format!==Oi?fe!==null?oe?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,nt.width,nt.height,fe,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,de,nt.width,nt.height,0,nt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,nt.width,nt.height,fe,ae,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,de,nt.width,nt.height,0,fe,ae,nt.data)}}}else{if(_e=M.mipmaps,oe&&pe){_e.length>0&&Q++;let ee=ke($[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Q,de,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(N){oe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,$[ee].width,$[ee].height,fe,ae,$[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,$[ee].width,$[ee].height,0,fe,ae,$[ee].data);for(let be=0;be<_e.length;be++){let We=_e[be].image[ee].image;oe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,We.width,We.height,fe,ae,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,de,We.width,We.height,0,fe,ae,We.data)}}else{oe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe,ae,$[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,fe,ae,$[ee]);for(let be=0;be<_e.length;be++){let nt=_e[be];oe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,fe,ae,nt.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,de,fe,ae,nt.image[ee])}}}A(M)&&M.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ce.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function tt(C,M,V,re,ie,ce){let ge=r.convert(V.format,V.colorSpace),H=r.convert(V.type),j=b(V.internalFormat,ge,H,V.normalized,V.colorSpace),le=n.get(M),N=n.get(V);if(N.__renderTarget=M,!le.__hasExternalTextures){let $=Math.max(1,M.width>>ce),J=Math.max(1,M.height>>ce);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,j,$,J,M.depth,0,ge,H,null):t.texImage2D(ie,ce,j,$,J,0,ge,H,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,N.__webglTexture,0,Ge(M)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,N.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(C,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){let re=M.depthTexture,ie=re&&re.isDepthTexture?re.type:null,ce=x(M.stencilBuffer,ie),ge=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;he(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge(M),ce,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge(M),ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,C)}else{let re=M.textures;for(let ie=0;ie<re.length;ie++){let ce=re[ie],ge=r.convert(ce.format,ce.colorSpace),H=r.convert(ce.type),j=b(ce.internalFormat,ge,H,ce.normalized,ce.colorSpace);he(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge(M),j,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge(M),j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(C,M,V){let re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(M.depthTexture);ie.__renderTarget=M;let ce=re?M.depthTexture.image[0]:M.depthTexture.image;(!ie.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),re?me(M.depthTexture,0):ue(M.depthTexture,0);let ge=ie.__webglTexture,H=Ge(M),j=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,le=M.depthTexture.format===zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Cs)he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,j,ge,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,le,j,ge,0);else if(M.depthTexture.format===zs)he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,j,ge,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,le,j,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(C){let M=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let re=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){let ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",ie)};re.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=re}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let re=0;re<6;re++)Mt(M.__webglFramebuffer[re],C,re);else C.texture.mipmaps.length>0?Mt(M.__webglFramebuffer[0],C,0):Mt(M.__webglFramebuffer,C,0);else if(V){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=s.createRenderbuffer(),jt(M.__webglDepthbuffer[re],C,!1);else{let ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ce)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),jt(M.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(C,M,V){let re=n.get(C);M!==void 0&&tt(re.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ot(C)}function Zt(C){let M=C.texture,V=n.get(C),re=n.get(M);C.addEventListener("dispose",L),E(C);let ie=C.textures,ce=C.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,o.memory.textures++),ce){V.__webglFramebuffer=[];for(let H=0;H<6;H++)if(M.mipmaps.length>0){V.__webglFramebuffer[H]=[];for(let j=0;j<M.mipmaps.length;j++)V.__webglFramebuffer[H][j]=s.createFramebuffer()}else V.__webglFramebuffer[H]=s.createFramebuffer()}else{if(M.mipmaps.length>0){V.__webglFramebuffer=[];for(let H=0;H<M.mipmaps.length;H++)V.__webglFramebuffer[H]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ge)for(let H=0,j=ie.length;H<j;H++){let le=n.get(ie[H]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&he(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let H=0;H<ie.length;H++){let j=ie[H];V.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[H]);let le=r.convert(j.format,j.colorSpace),N=r.convert(j.type),$=b(j.internalFormat,le,N,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),J=Ge(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,$,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,V.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),jt(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),He(s.TEXTURE_CUBE_MAP,M);for(let H=0;H<6;H++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)tt(V.__webglFramebuffer[H][j],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,j);else tt(V.__webglFramebuffer[H],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);A(M)?v(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let H=0,j=ie.length;H<j;H++){let le=ie[H],N=n.get(le),$=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,N.__webglTexture),He($,le),tt(V.__webglFramebuffer,C,le,s.COLOR_ATTACHMENT0+H,$,0),A(le)&&v($)}t.unbindTexture()}else{let H=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(H=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(H,re.__webglTexture),He(H,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)tt(V.__webglFramebuffer[j],C,M,s.COLOR_ATTACHMENT0,H,j);else tt(V.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,H,0);A(M)?v(H):M.mipmaps.length>0&&s.texParameteri(H,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ot(C)}function U(C){let M=C.textures;for(let V=0,re=M.length;V<re;V++){let ie=M[V];if(A(ie)&&ie.mipmapsAutoUpdate===!0){let ce=T(C),ge=n.get(ie).__webglTexture;t.bindTexture(ce,ge),v(ce),t.unbindTexture()}}}let dt=[];function ct(C){if(C.samples>0){if(he(C)===!1){let M=C.textures,V=C.width,re=C.height,ie=s.COLOR_BUFFER_BIT,ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(C),H=M.length>1;if(H)for(let le=0;le<M.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let le=0;le<M.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let N=n.get(M[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,V,re,0,0,V,re,ie,s.NEAREST),l===!0&&(dt.length=0,dt.push(s.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&dt.push(ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let le=0;le<M.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let N=n.get(M[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ge(C){return Math.min(i.maxSamples,C.samples)}function he(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(C){let M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Le(C,M){let V=C.colorSpace,re=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Xn&&V!==Gs&&(Je.getTransfer(V)===gt?(re!==Oi||ie!==oi)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",V)),M}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=P,this.getTextureUnits=ne,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=ve,this.setTexture3D=we,this.setTextureCube=me,this.rebindTextures=Ht,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=he,this.dispose=k}function jT(s,e){function t(n,i=Gs){let r,o=Je.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===Au)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Eu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===fd)return s.BYTE;if(n===dd)return s.SHORT;if(n===ma)return s.UNSIGNED_SHORT;if(n===wu)return s.INT;if(n===Ji)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===$i)return s.HALF_FLOAT;if(n===gd)return s.ALPHA;if(n===_d)return s.RGB;if(n===Oi)return s.RGBA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===zs)return s.DEPTH_STENCIL;if(n===ga)return s.RED;if(n===Ru)return s.RED_INTEGER;if(n===gr)return s.RG;if(n===Cu)return s.RG_INTEGER;if(n===Pu)return s.RGBA_INTEGER;if(n===Rl||n===Cl||n===Pl||n===Il)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Lu||n===Du||n===Nu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ou||n===Uu||n===Fu||n===Bu||n===ku||n===Ll||n===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ou||n===Uu)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bu)return r.COMPRESSED_R11_EAC;if(n===ku)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ll)return r.COMPRESSED_RG11_EAC;if(n===zu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gu||n===Vu||n===Hu||n===Wu||n===Xu||n===qu||n===Yu||n===Ku||n===Zu||n===Ju||n===$u||n===ju||n===Qu||n===eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===th||n===nh||n===ih)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===th)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===rh||n===Dl||n===oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===io?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ss({vertexShader:QT,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gd=class extends Zi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new zd,g={},S=t.getContextAttributes(),A=null,v=null,T=[],b=[],x=new Ye,y=null,E=null,R=new un;R.viewport=new yt;let D=new un;D.viewport=new yt;let L=[R,D],B=new yu,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Qo,T[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Qo,T[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Qo,T[Z]=ue),ue.getHandSpace()};function W(Z){let ue=b.indexOf(Z.inputSource);if(ue===-1)return;let ve=T[ue];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){let ue=b[Z];ue!==null&&(b[Z]=null,T[Z].disconnect(ue))}I=null,k=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(A),d=null,f=null,h=null,i=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",F),i.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,we=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?zs:Cs,we=S.stencil?io:Ji);let De={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new xi(f.textureWidth,f.textureHeight,{format:Oi,type:oi,depthTexture:new Ds(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new xi(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let ue=0;ue<Z.removed.length;ue++){let ve=Z.removed[ue],we=b.indexOf(ve);we>=0&&(b[we]=null,T[we].disconnect(ve))}for(let ue=0;ue<Z.added.length;ue++){let ve=Z.added[ue],we=b.indexOf(ve);if(we===-1){for(let De=0;De<T.length;De++)if(De>=b.length){b.push(ve),we=De;break}else if(b[De]===null){b[De]=ve,we=De;break}if(we===-1)break}let me=T[we];me&&me.connect(ve)}}function q(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ue=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),B.near=D.near=R.near=ue,B.far=D.far=R.far=ve,(I!==B.near||k!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let we=Z.parent,me=B.cameras;q(B,we);for(let De=0;De<me.length;De++)q(me[De],we);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),P(Z,B,we)};function P(Z,ue,ve){ve===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let ne=null;function Se(Z,ue){if(u=ue.getViewerPose(c||o),p=ue,u!==null){let ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let we=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,we=!0);for(let Ae=0;Ae<ve.length;Ae++){let He=ve[Ae],Ie=null;if(d!==null)Ie=d.getViewport(He);else{let ht=h.getViewSubImage(f,He);Ie=ht.viewport,Ae===0&&(e.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(v))}let Ue=L[Ae];Ue===void 0&&(Ue=new un,Ue.layers.enable(Ae),Ue.viewport=new yt,L[Ae]=Ue),Ue.matrix.fromArray(He.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(He.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ae===0&&(B.matrix.copy(Ue.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),we===!0&&B.cameras.push(Ue)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Ae=h.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(Ae,i.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ae=0;Ae<ve.length;Ae++){let He=ve[Ae].camera;if(He){let Ie=g[He];Ie||(Ie=new xl,g[He]=Ie);let Ue=h.getCameraImage(He);Ie.sourceTexture=Ue}}}}for(let ve=0;ve<T.length;ve++){let we=b[ve],me=T[ve];we!==null&&me!==void 0&&me.update(we,ue,c||o)}ne&&ne(Z,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}let Be=new k_;Be.setAnimationLoop(Se),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}},tw=new qe,Z_=new Ve;Z_.set(-1,0,0,0,1,0,0,0,1);function nw(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Rd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,A,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=e.get(g),A=S.envMap,v=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Z_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iw(s,e,t,n){let i={},r={};function o(S,A){let v=A.program;n.uniformBlockBinding(S,v,i[S.id])}function a(S,A){let v=i[S.id];v===void 0&&(p(S),v=l(S),i[S.id]=v,S.addEventListener("dispose",m));let T=A.program;n.updateUBOMapping(S,T);let b=e.render.frame;r[S.id]!==b&&(c(S),r[S.id]=b)}function l(S){let A=s.createBuffer(),v=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,v,T),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function c(S){let A=i[S.id],v=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let b=0,x=v.length;b<x;b++){let y=v[b];if(Array.isArray(y))for(let E=0,R=y.length;E<R;E++)u(y[E],b,E,T);else u(y,b,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(S,A,v,T){if(f(S,A,v,T)===!0){let b=S.__offset,x=S.value;if(Array.isArray(x)){let y=0;for(let E=0;E<x.length;E++){let R=x[E],D=_(R,!0);h(R,S.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,S.__data)}}function h(S,A,v){typeof S=="number"||typeof S=="boolean"?A[v]=S:S.isMatrix3?(A[v]=S.elements[0],A[v+1]=S.elements[1],A[v+2]=S.elements[2],A[v+3]=0,A[v+4]=S.elements[3],A[v+5]=S.elements[4],A[v+6]=S.elements[5],A[v+7]=0,A[v+8]=S.elements[6],A[v+9]=S.elements[7],A[v+10]=S.elements[8],A[v+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-v),v):S.toArray(A,v)}function f(S,A,v,T){let b=S.value,x=A+"_"+v;if(Array.isArray(b)){T[x]===void 0&&(T[x]=[]);let y=T[x],E=!1;for(let R=0;R<b.length;R++)d(b[R],y,R)===!0&&(E=!0);return E}return d(b,T,x)}function d(S,A,v){if(A[v]===void 0)return typeof S=="number"||typeof S=="boolean"?A[v]=S:ArrayBuffer.isView(S)?A[v]=S.slice():A[v]=S.clone(),!0;{let T=A[v];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return A[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function p(S){let A=S.uniforms,v=0,T=16;for(let x=0,y=A.length;x<y;x++){let E=Array.isArray(A[x])?A[x]:[A[x]];for(let R=0,D=E.length;R<D;R++){let L=E[R],B=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(A[x])||Array.isArray(L.value),k=v;for(let F=0,te=B.length;F<te;F++){let q=B[F],P=_(q,I),ne=v%T,Se=ne%P.boundary,Be=ne+Se;v+=Se,Be!==0&&T-Be<P.storage&&(v+=T-Be),F===0&&(k=v),v+=P.storage}let W=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new W((v-k)/Float32Array.BYTES_PER_ELEMENT),L.__offset=k}}let b=v%T;return b>0&&(v+=T-b),S.__size=v,S.__cache={},this}function _(S,A){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(S){let A=S.target;A.removeEventListener("dispose",m),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}var sw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),us=null;function rw(){return us===null&&(us=new fr(sw,16,16,gr,$i),us.name="DFG_LUT",us.minFilter=hn,us.magFilter=hn,us.wrapS=Ii,us.wrapT=Ii,us.generateMipmaps=!1,us.needsUpdate=!0),us}var fh=class{constructor(e={}){let{canvas:t=u_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=oi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Pu,Cu,Ru]),g=new Set([oi,Ji,ma,io,Au,Eu]),S=new Uint32Array(4),A=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,b=null,x=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,L=null,B=null,I=null,k=null;this._outputColorSpace=Nt;let W=0,F=0,te=null,q=-1,P=null,ne=new yt,Se=new yt,Be=null,Z=new Oe(0),ue=0,ve=t.width,we=t.height,me=1,De=null,xt=null,Ae=new yt(0,0,ve,we),He=new yt(0,0,ve,we),Ie=!1,Ue=new dr,ht=new au,lt=!1,K=!1,tt=new qe,jt=new G,Mt=new yt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Zt(){return te===null?me:1}let U=n;function dt(w,O){return t.getContext(w,O)}let ct,Ge,he,ft,Le,ke,C,M,V,re,ie,ce,ge,H,j,le,N,$,J,fe,ae,de,oe;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ee,!1),U===null){let O="webgl2";if(U=dt(O,w),U===null)throw dt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(w){throw t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ze("WebGLRenderer: "+w.message),w}function pe(){ct=new gb(U),ct.init(),ae=new jT(U,ct),Ge=new rb(U,ct,e,ae),he=new JT(U,ct),Ge.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),B=U.createFramebuffer(),I=U.createFramebuffer(),k=U.createFramebuffer(),ft=new yb(U),Le=new UT,ke=new $T(U,ct,he,Le,Ge,ae,ft),C=new mb(R),M=new Sv(U),de=new ib(U,M),V=new _b(U,M,ft,de),re=new Sb(U,V,M,de,ft),$=new vb(U,Ge,ke),j=new ob(Le),ie=new OT(R,C,ct,Ge,de,j),ce=new nw(R,Le),ge=new BT,H=new WT(ct),N=new nb(R,C,he,re,p,l),le=new ZT(R,re,Ge),oe=new iw(U,ft,Ge,he),J=new sb(U,ct,ft),fe=new xb(U,ct,ft),ft.programs=ie.programs,R.capabilities=Ge,R.extensions=ct,R.properties=Le,R.renderLists=ge,R.shadowMap=le,R.state=he,R.info=ft}_!==oi&&(E=new bb(_,t.width,t.height,a,i,r));let se=new Gd(R,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(ve,we,!1))},this.getSize=function(w){return w.set(ve,we)},this.setSize=function(w,O,Y=!0){if(se.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=w,we=O,t.width=Math.floor(w*me),t.height=Math.floor(O*me),Y===!0&&(t.style.width=w+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ve*me,we*me).floor()},this.setDrawingBufferSize=function(w,O,Y){ve=w,we=O,me=Y,t.width=Math.floor(w*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===oi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,O,Y,z){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,O,Y,z),he.viewport(ne.copy(Ae).multiplyScalar(Zt()).round())},this.getScissor=function(w){return w.copy(He)},this.setScissor=function(w,O,Y,z){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,O,Y,z),he.scissor(Se.copy(He).multiplyScalar(Zt()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){he.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){De=w},this.setTransparentSort=function(w){xt=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,Y=!0){let z=0;if(w){let X=!1;if(te!==null){let ye=te.texture.format;X=m.has(ye)}if(X){let ye=te.texture.type,Re=g.has(ye),xe=N.getClearColor(),Te=N.getClearAlpha(),Ne=xe.r,Xe=xe.g,st=xe.b;Re?(S[0]=Ne,S[1]=Xe,S[2]=st,S[3]=Te,U.clearBufferuiv(U.COLOR,0,S)):(A[0]=Ne,A[1]=Xe,A[2]=st,A[3]=Te,U.clearBufferiv(U.COLOR,0,A))}else z|=U.COLOR_BUFFER_BIT}O&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),N.dispose(),ge.dispose(),H.dispose(),ke.dispose(),Le.dispose(),C.dispose(),re.dispose(),V.dispose(),de.dispose(),oe.dispose(),ie.dispose(),se.dispose(),se.removeEventListener("sessionstart",bt),se.removeEventListener("sessionend",mt),an.stop()};function Q(w){w.preventDefault(),sl("WebGLRenderer: Context Lost."),D=!0}function _e(){sl("WebGLRenderer: Context Restored."),D=!1;let w=ft.autoReset,O=le.enabled,Y=le.autoUpdate,z=le.needsUpdate,X=le.type;pe(),ft.autoReset=w,le.enabled=O,le.autoUpdate=Y,le.needsUpdate=z,le.type=X}function ee(w){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function be(w){let O=w.target;O.removeEventListener("dispose",be),nt(O)}function nt(w){We(w),Le.remove(w)}function We(w){let O=Le.get(w).programs;O!==void 0&&(O.forEach(function(Y){ie.releaseProgram(Y)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,z,X,ye){O===null&&(O=ot);let Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=Ci(w,O,Y,z,X);he.setMaterial(z,Re);let Te=Y.index,Ne=1;if(z.wireframe===!0){if(Te=V.getWireframeAttribute(Y),Te===void 0)return;Ne=2}let Xe=Y.drawRange,st=Y.attributes.position,Ce=Xe.start*Ne,rt=(Xe.start+Xe.count)*Ne;ye!==null&&(Ce=Math.max(Ce,ye.start*Ne),rt=Math.min(rt,(ye.start+ye.count)*Ne)),Te!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,Te.count)):st!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,st.count));let tn=rt-Ce;if(tn<0||tn===1/0)return;de.setup(X,z,xe,Y,Te);let Rt,wt=J;if(Te!==null&&(Rt=M.get(Te),wt=fe,wt.setIndex(Rt)),X.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*Zt()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(X.isLine){let Pn=z.linewidth;Pn===void 0&&(Pn=1),he.setLineWidth(Pn*Zt()),X.isLineSegments?wt.setMode(U.LINES):X.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else X.isPoints?wt.setMode(U.POINTS):X.isSprite&&wt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Pn=X._multiDrawStarts,Pe=X._multiDrawCounts,Hn=X._multiDrawCount,pt=Te?M.get(Te).bytesPerElement:1,Dr=Le.get(z).currentProgram.getUniforms();for(let In=0;In<Hn;In++)Dr.setValue(U,"_gl_DrawID",In),wt.render(Pn[In]/pt,Pe[In])}else if(X.isInstancedMesh)wt.renderInstances(Ce,tn,X.count);else if(Y.isInstancedBufferGeometry){let Pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,Pn);wt.renderInstances(Ce,tn,Pe)}else wt.render(Ce,tn)};function Lt(w,O,Y,z){L!==null&&w.isNodeMaterial&&L.setObject(z,w),lt===!0&&j.setState(w,Y,!1),w.transparent===!0&&w.side===ri&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,pi(w,O,z),w.side=as,w.needsUpdate=!0,pi(w,O,z),w.side=ri):pi(w,O,z)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),L!==null&&L.renderStart(w,O,Y),b=H.get(Y),b.init(O),y.push(b),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),w!==Y&&w.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),K=this.localClippingEnabled,lt=j.init(this.clippingPlanes,K),lt===!0&&j.setGlobalState(this.clippingPlanes,O),L!==null&&le.render(b.state.shadowsArray,Y,O);let z=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ye=X.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){let xe=ye[Re];Lt(xe,Y,O,X),z.add(xe)}else Lt(ye,Y,O,X),z.add(ye)}),b=y.pop(),L!==null&&L.renderEnd(),z},this.compileAsync=function(w,O,Y=null){let z=this.compile(w,O,Y);return new Promise(X=>{function ye(){if(z.forEach(function(Re){let Te=Le.get(Re).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Re)}),z.size===0){X(w);return}setTimeout(ye,10)}ct.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Qt=null;function Dt(w){Qt&&Qt(w)}function bt(){an.stop()}function mt(){an.start()}let an=new k_;an.setAnimationLoop(Dt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(w){Qt=w,se.setAnimationLoop(w),w===null?an.stop():an.start()},se.addEventListener("sessionstart",bt),se.addEventListener("sessionend",mt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(w,O);let Y=se.enabled===!0&&se.isPresenting===!0,z=E!==null&&(te===null||Y)&&E.begin(R,te);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(O),O=se.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,O,te),b=H.get(w,y.length),b.init(O),b.state.textureUnits=ke.getTextureUnits(),y.push(b),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ht.setFromArrayCamera(O):Ue.setFromProjectionMatrix(tt,Li,O.reversedDepth),K=this.localClippingEnabled,lt=j.init(this.clippingPlanes,K),T=ge.get(w,x.length),T.init(),x.push(T),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Re=R.xr.getDepthSensingMesh();Re!==null&&Tt(Re,O,-1/0,R.sortObjects)}Tt(w,O,0,R.sortObjects),T.finish(),L!==null&&L.updateLights(b.state.lightsArray),R.sortObjects===!0&&T.sort(De,xt),Ht=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ht&&N.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),lt===!0&&j.beginShadows();let X=b.state.shadowsArray;if(le.render(X,w,O),lt===!0&&j.endShadows(),(z&&E.hasRenderPass())===!1){let Re=T.opaque,xe=T.transmissive;if(b.setupLights(),O.isArrayCamera){let Te=O.cameras;if(xe.length>0)for(let Ne=0,Xe=Te.length;Ne<Xe;Ne++){let st=Te[Ne];di(Re,xe,w,st)}Ht&&N.render(w);for(let Ne=0,Xe=Te.length;Ne<Xe;Ne++){let st=Te[Ne];Cn(T,w,st,st.viewport)}}else xe.length>0&&di(Re,xe,w,O),Ht&&N.render(w),Cn(T,w,O)}te!==null&&F===0&&(ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te)),z&&E.end(R),w.isScene===!0&&w.onAfterRender(R,w,O),de.resetDefaultState(),q=-1,P=null,y.pop(),y.length>0?(b=y[y.length-1],ke.setTextureUnits(b.state.textureUnits),lt===!0&&j.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,L!==null&&L.renderEnd()};function Tt(w,O,Y,z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){let Re=O.isArrayCamera?ht:Ue;if(!w.frustumCulled||w.intersectsFrustum(Re)){z&&Mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tt);let xe=re.update(w),Te=w.material;Te.visible&&T.push(w,xe,Te,Y,Mt.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){let Re=O.isArrayCamera?ht:Ue;if(!w.frustumCulled||w.intersectsFrustum(Re)){let xe=re.update(w),Te=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Mt.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Mt.copy(xe.boundingSphere.center)),Mt.applyMatrix4(w.matrixWorld).applyMatrix4(tt)),Array.isArray(Te)){let Ne=xe.groups;for(let Xe=0,st=Ne.length;Xe<st;Xe++){let Ce=Ne[Xe],rt=Te[Ce.materialIndex];rt&&rt.visible&&T.push(w,xe,rt,Y,Mt.z,Ce,O)}}else Te.visible&&T.push(w,xe,Te,Y,Mt.z,null,O)}}}let ye=w.children;for(let Re=0,xe=ye.length;Re<xe;Re++)Tt(ye[Re],O,Y,z)}function Cn(w,O,Y,z){let{opaque:X,transmissive:ye,transparent:Re}=w;b.setupLightsView(Y),lt===!0&&j.setGlobalState(R.clippingPlanes,Y),z&&he.viewport(ne.copy(z)),X.length>0&&Wt(X,O,Y),ye.length>0&&Wt(ye,O,Y),Re.length>0&&Wt(Re,O,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function di(w,O,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Ce=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new xi(1,1,{generateMipmaps:!0,type:Ce?$i:oi,minFilter:Ni,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ye=b.state.transmissionRenderTarget[z.id],Re=z.viewport||ne;ye.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);let xe=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(Z),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),Ht&&N.render(Y);let Xe=R.toneMapping;R.toneMapping=ls;let st=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),lt===!0&&j.setGlobalState(R.clippingPlanes,z),Wt(w,Y,z),ke.updateMultisampleRenderTarget(ye),ke.updateRenderTargetMipmap(ye),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,tn=O.length;rt<tn;rt++){let Rt=O[rt],{object:wt,geometry:Pn,material:Pe,group:Hn}=Rt;if(Pe.side===ri&&wt.layers.test(z.layers)){let pt=Pe.side;Pe.side=bn,Pe.needsUpdate=!0,en(wt,Y,z,Pn,Pe,Hn),Pe.side=pt,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(ke.updateMultisampleRenderTarget(ye),ke.updateRenderTargetMipmap(ye))}R.setRenderTarget(xe,Te,Ne),R.setClearColor(Z,ue),st!==void 0&&(z.viewport=st),R.toneMapping=Xe}function Wt(w,O,Y){let z=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ye=w.length;X<ye;X++){let Re=w[X],{object:xe,geometry:Te,group:Ne}=Re,Xe=Re.material;Xe.allowOverride===!0&&z!==null&&(Xe=z),xe.layers.test(Y.layers)&&en(xe,O,Y,Te,Xe,Ne)}}function en(w,O,Y,z,X,ye){L!==null&&X.isNodeMaterial&&L.setObject(w,X),w.onBeforeRender(R,O,Y,z,X,ye),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,O,Y,z,w,ye),X.transparent===!0&&X.side===ri&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,R.renderBufferDirect(Y,O,z,X,w,ye),X.side=as,X.needsUpdate=!0,R.renderBufferDirect(Y,O,z,X,w,ye),X.side=ri):R.renderBufferDirect(Y,O,z,X,w,ye),w.onAfterRender(R,O,Y,z,X,ye)}function ln(w){let O=0;for(let Y of w)Y.texture!==null&&O++;return O}function pi(w,O,Y){O.isScene!==!0&&(O=ot);let z=Le.get(w),X=b.state.lights,ye=b.state.shadowsArray,Re=X.state.version,xe=ie.getParameters(w,X.state,ye,O,Y,b.state.lightProbeGridArray),Te=ie.getProgramCacheKey(xe),Ne=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,z.fog=O.fog;let Xe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=C.get(w.envMap||z.environment,Xe),z.envMapRotation=z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",be),Ne=new Map,z.programs=Ne,z.programVariants=new Map);let st=Ne.get(Te);if(st!==void 0){if(z.currentProgram===st&&z.lightsStateVersion===Re)return Xt(w,xe),st}else xe.uniforms=ie.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,Y,xe),w.onBeforeCompile(xe,R),st=ie.acquireProgram(xe,Te),Ne.set(Te,st),z.uniforms=xe.uniforms;let Ce=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=j.uniform),Xt(w,xe),z.needsLights=Mc(w),z.lightsStateVersion=Re,z.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),z.numLightProbeGrids=ln(b.state.lightProbeGridArray),z.currentProgram=st,z.uniformsList=null,st}function Io(w,O,Y,z,X){let ye=Le.get(w),Re=ye.currentProgram.id+","+z+","+X,xe=ye.programVariants.get(Re);return xe===void 0?(xe=pi(w,O,Y),ye.programVariants.set(Re,xe)):(ye.currentProgram=xe,ye.uniformsList=null,ye.outputColorSpace=z,ye.toneMapping=X),xe}function cn(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=xa.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Xt(w,O){let Y=Le.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Ci(w,O,Y,z,X){O.isScene!==!0&&(O=ot),ke.resetTextureUnits();let ye=O.fog,Re=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?O.environment:null,xe=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Je.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ne=C.get(z.envMap||Re,Te),Xe=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,st=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color,Rt=ls;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Rt=R.toneMapping);let wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pn=wt!==void 0?wt.length:0,Pe=Le.get(z),Hn=b.state.lights;if(lt===!0&&(K===!0||w!==P)){let Ft=w===P&&z.id===q;j.setState(z,w,Ft)}let pt=!1,Dr=!1;z.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Hn.state.version||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ne||z.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==j.numPlanes||Pe.numIntersection!==j.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==st||Pe.morphTargets!==Ce||Pe.morphNormals!==rt||Pe.morphColors!==tn||Pe.morphTargetsCount!==Pn||Pe.numLightProbeGrids!==ln(b.state.lightProbeGridArray)?pt=!0:(Pe.outputColorSpace!==xe||Pe.toneMapping!==Rt)&&(Dr=!0):(pt=!0,Pe.__version=z.version);let In=Pe.currentProgram;(pt===!0||Dr===!0)&&(In=Dr===!0?Io(z,O,X,xe,Rt):pi(z,O,X),L&&z.isNodeMaterial&&L.onUpdateProgram(z,In,Pe));let bc=!1,ir=!1,Nr=!1,ut=In.getUniforms(),Mn=Pe.uniforms;if(he.useProgram(In.program)&&(bc=!0,ir=!0,Nr=!0),z.id!==q&&(q=z.id,ir=!0),bc||P!==w){he.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",w.projectionMatrix),ut.setValue(U,"viewMatrix",w.matrixWorldInverse);let xn=ut.map.cameraPosition;xn!==void 0&&xn.setValue(U,jt.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ut.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,ir=!0,Nr=!0)}if(Pe.needsLights&&(Hn.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",Hn.state.sunShadowMap,ke),Hn.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Hn.state.directionalShadowMap,ke),Hn.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Hn.state.spotShadowMap,ke),Hn.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Hn.state.pointShadowMap,ke)),X.isSkinnedMesh){ut.setOptional(U,X,"bindMatrix"),ut.setOptional(U,X,"bindMatrixInverse");let Ft=X.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ut.setValue(U,"boneTexture",Ft.boneTexture,ke))}X.isBatchedMesh&&(ut.setOptional(U,X,"batchingTexture"),ut.setValue(U,"batchingTexture",X._matricesTexture,ke),ut.setOptional(U,X,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",X._indirectTexture,ke),ut.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",X._colorsTexture,ke));let Wi=Y.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&$.update(X,Y,In),(ir||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,ut.setValue(U,"receiveShadow",X.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&O.environment!==null&&(Mn.envMapIntensity.value=O.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=rw()),ir){if(ut.setValue(U,"toneMappingExposure",R.toneMappingExposure),Pe.needsLights&&Wa(Mn,Nr),ye&&z.fog===!0&&ce.refreshFogUniforms(Mn,ye),ce.refreshMaterialUniforms(Mn,z,me,we,b.state.transmissionRenderTarget[w.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let Ft=v,xn=0;for(let Ss of b.state.lightProbeGridArray)Ss.texture!==null&&(Ft.textures[xn]=Ss.texture,Ft.min[xn]=Ss.boundingBox.min,Ft.max[xn]=Ss.boundingBox.max,Ft.resolution[xn]=Ss.resolution,xn++);for(let Ss in Ft)Ft[Ss].length=xn;Mn.probesSH.value=Ft.textures,Mn.probesMin.value=Ft.min,Mn.probesMax.value=Ft.max,Mn.probesResolution.value=Ft.resolution}xa.upload(U,cn(Pe),Mn,ke)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xa.upload(U,cn(Pe),Mn,ke),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ut.setValue(U,"center",X.center),ut.setValue(U,"modelViewMatrix",X.modelViewMatrix),ut.setValue(U,"normalMatrix",X.normalMatrix),ut.setValue(U,"modelMatrix",X.matrixWorld),z.uniformsGroups!==void 0){let Ft=z.uniformsGroups;for(let xn=0,Ss=Ft.length;xn<Ss;xn++){let Gm=Ft[xn];oe.update(Gm,In),oe.bind(Gm,In)}}return In}function Wa(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Mc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(w,O,Y){let z=Le.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Le.get(w.texture).__webglTexture=O,Le.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let Y=Le.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){te=w,W=O,F=Y;let z=null,X=!1,ye=!1;if(w){let xe=Le.get(w);if(xe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(w.viewport),Se.copy(w.scissor),Be=w.scissorTest,he.viewport(ne),he.scissor(Se),he.setScissorTest(Be),q=-1;return}else if(xe.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(xe.__hasExternalTextures)ke.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Xe=w.depthTexture;if(xe.__boundDepthTexture!==Xe){if(Xe!==null&&Le.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}let Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);let Ne=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?z=Ne[O][Y]:z=Ne[O],X=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?z=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[Y]:z=Ne,ne.copy(w.viewport),Se.copy(w.scissor),Be=w.scissorTest}else ne.copy(Ae).multiplyScalar(me).floor(),Se.copy(He).multiplyScalar(me).floor(),Be=Ie;if(Y!==0&&(z=B),he.bindFramebuffer(U.FRAMEBUFFER,z)&&he.drawBuffers(w,z),he.viewport(ne),he.scissor(Se),he.setScissorTest(Be),X){let xe=Le.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,Y)}else if(ye){let xe=O;for(let Te=0;Te<w.textures.length;Te++){let Ne=Le.get(w.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,Y,xe)}}else if(w!==null&&Y!==0){let xe=Le.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,Y)}q=-1};function nr(w){let O=Le.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=Ge.textureFormatReadable(w.format),O.__typeReadable=Ge.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,Y,z,X,ye,Re,xe=0){if(!(w&&w.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Te=Te[Re],Array.isArray(Te)&&(Te=Te[0])),Te){he.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ne=w.textures[xe],Xe=Ne.format,st=Ne.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let Ce=nr(Ne);if(Ce.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-z&&Y>=0&&Y<=w.height-X&&U.readPixels(O,Y,z,X,ae.convert(Xe),ae.convert(st),ye)}finally{let Ne=te!==null?Le.get(te).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,z,X,ye,Re,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Te=Te[Re],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=w.width-z&&Y>=0&&Y<=w.height-X){he.bindFramebuffer(U.FRAMEBUFFER,Te);let Ne=w.textures[xe],Xe=Ne.format,st=Ne.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let Ce=nr(Ne);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(O,Y,z,X,ae.convert(Xe),ae.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let tn=te!==null?Le.get(te).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,tn);let Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await f_(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(rt),U.deleteSync(Rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,Y=0){let z=Math.pow(2,-Y),X=Math.floor(w.image.width*z),ye=Math.floor(w.image.height*z),Re=O!==null?O.x:0,xe=O!==null?O.y:0;ke.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Re,xe,X,ye),he.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,z=null,X=0,ye=0){let Re,xe,Te,Ne,Xe,st,Ce,rt,tn,Rt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(Y!==null)Re=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Xe=Y.min.y,st=Y.isBox3?Y.min.z:0;else{let ut=Math.pow(2,-X);Re=Math.floor(Rt.width*ut),xe=Math.floor(Rt.height*ut),w.isDataArrayTexture?Te=Rt.depth:w.isData3DTexture?Te=Math.floor(Rt.depth*ut):Te=1,Ne=0,Xe=0,st=0}z!==null?(Ce=z.x,rt=z.y,tn=z.z):(Ce=0,rt=0,tn=0);let wt=ae.convert(O.format),Pn=ae.convert(O.type),Pe;O.isData3DTexture?(ke.setTexture3D(O,0),Pe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ke.setTexture2DArray(O,0),Pe=U.TEXTURE_2D_ARRAY):(ke.setTexture2D(O,0),Pe=U.TEXTURE_2D),he.activeTexture(U.TEXTURE0),he.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),he.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),he.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Hn=he.getParameter(U.UNPACK_ROW_LENGTH),pt=he.getParameter(U.UNPACK_IMAGE_HEIGHT),Dr=he.getParameter(U.UNPACK_SKIP_PIXELS),In=he.getParameter(U.UNPACK_SKIP_ROWS),bc=he.getParameter(U.UNPACK_SKIP_IMAGES);he.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),he.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),he.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let ir=w.isDataArrayTexture||w.isData3DTexture,Nr=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let ut=Le.get(w),Mn=Le.get(O),Wi=Le.get(ut.__renderTarget),Ft=Le.get(Mn.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,Wi.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let xn=0;xn<Te;xn++)ir&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(w).__webglTexture,X,st+xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(O).__webglTexture,ye,tn+xn)),U.blitFramebuffer(Ne,Xe,Ne+Re,Xe+xe,Ce,rt,Ce+Re,rt+xe,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Le.has(w)){let ut=Le.get(w),Mn=Le.get(O);he.bindFramebuffer(U.READ_FRAMEBUFFER,I),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let Wi=0;Wi<Te;Wi++)ir?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,X,st+Wi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,X),Nr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,ye,tn+Wi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,ye),X!==0?U.blitFramebuffer(Ne,Xe,Ne+Re,Xe+xe,Ce,rt,Ce+Re,rt+xe,U.COLOR_BUFFER_BIT,U.NEAREST):Nr?U.copyTexSubImage3D(Pe,ye,Ce,rt,tn+Wi,Ne,Xe,Re,xe):U.copyTexSubImage2D(Pe,ye,Ce,rt,Ne,Xe,Re,xe);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Nr?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Pe,ye,Ce,rt,tn,Re,xe,Te,wt,Pn,Rt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,ye,Ce,rt,tn,Re,xe,Te,wt,Rt.data):U.texSubImage3D(Pe,ye,Ce,rt,tn,Re,xe,Te,wt,Pn,Rt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,Ce,rt,Re,xe,wt,Pn,Rt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,Ce,rt,Rt.width,Rt.height,wt,Rt.data):U.texSubImage2D(U.TEXTURE_2D,ye,Ce,rt,Re,xe,wt,Pn,Rt);he.pixelStorei(U.UNPACK_ROW_LENGTH,Hn),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Dr),he.pixelStorei(U.UNPACK_SKIP_ROWS,In),he.pixelStorei(U.UNPACK_SKIP_IMAGES,bc),ye===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Pe),he.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){W=0,F=0,te=null,he.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function $_(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new dn;l.morphTargetsRelative=a;let c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=J_(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let p=J_(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function J_(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new sn(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let _=u.getComponent(f,p);a.setComponent(f+h,p,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Vd(s,e){if(e===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===_a||e===Nl){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===_a)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function mh(s){let e=new Map,t=new Map,n=s.clone();return j_(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function j_(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)j_(s.children[n],e.children[n],t)}var gh=class extends os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new op(t)}),this.register(function(t){return new ap(t)}),this.register(function(t){return new lp(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new ip(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new sp(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new _h(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _h(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new cp(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ks.extractUrlBase(e);o=ks.resolveURL(c,this.path)}else o=ks.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new aa(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===i0){try{o[$e.KHR_BINARY_GLTF]=new up(e)}catch(h){i&&i(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _p(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new Yd;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new hp(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new fp;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new dp;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function aw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function kt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qd=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wl(u),c.distance=h;break;case"spot":c=new Tl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Yd=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}},Kd=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Zd=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(i)}},Jd=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},$d=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},jd=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Qd=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Xn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},ep=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},tp=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(r[0],r[1],r[2],Xn),Promise.all(i)}},np=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ip=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(r[0],r[1],r[2],Xn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(i)}},sp=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},rp=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},op=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ap=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},lp=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},_h=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},cp=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ui.TRIANGLES&&c.mode!==Ui.TRIANGLE_STRIP&&c.mode!==Ui.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let _=new qe,m=new G,g=new Nn,S=new G(1,1,1),A=new Ls(p.geometry,p.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),A.setMatrixAt(T,_.compose(m,g,S));let v=null;for(let T in l)if(T==="_COLOR_0"){let b=l[T];A.instanceColor=new Is(b.array,b.itemSize,b.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){let x=A.geometry;v=new dn,v.name=x.name;for(let y in x.attributes)v.setAttribute(y,x.attributes[y]);for(let y in x.morphAttributes)v.morphAttributes[y]=x.morphAttributes[y];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let y of x.groups)v.addGroup(y.start,y.count,y.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),A.geometry=v}let b=l[T];v.setAttribute(T,new Is(b.array,b.itemSize,b.normalized))}Ct.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),d.push(A)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},i0="glTF",Gl=12,Q_={JSON:1313821514,BIN:5130562},up=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Gl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==i0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Gl,r=new DataView(e,Gl),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Q_.JSON){let c=new Uint8Array(e,Gl+o,a);this.content=n.decode(c)}else if(l===Q_.BIN){let c=Gl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=mp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=mp[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=va[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(d)},a,c,Xn,f)})})}},fp=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},dp=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},xh=class extends rs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,p=e*c,_=p-c,m=-2*d+3*f,g=d-f,S=1-m,A=g-f+h;for(let v=0;v!==a;v++){let T=o[_+v+a],b=o[_+v+l]*u,x=o[p+v+a],y=o[p+v]*u;r[v]=S*T+A*b+m*x+g*y}return r}},lw=new Nn,pp=class extends xh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return lw.fromArray(r).normalize().toArray(r),r}},Ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},e0={9728:Bt,9729:hn,9984:Tu,9985:pa,9986:no,9987:Ni},t0={33071:Ii,33648:Ko,10497:hr},Hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cw={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Vr},Wd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Kr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:as})),s.DefaultMaterial}function ro(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hw(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function fw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dw(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xd(t.attributes):e=s.indices+":"+Xd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xd(s.targets[n]);return e}function Xd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function gp(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var mw=new qe,_p=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Zr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Al(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new aa(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ro(r,a,i),fs(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ks.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Hd[i.type],a=va[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new sn(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Hd[i.type],c=va[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(d&&d!==h){let g=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,A=t.cache.get(S);A||(_=new c(a,g*d,i.count*d/u),A=new ea(_,d/u),t.cache.add(S,A)),m=new ta(A,l,f%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new sn(_,l,p);if(i.sparse!==void 0){let g=Hd.SCALAR,S=va[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new S(o[1],A,i.sparse.count*g),b=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,y=T.length;x<y;x++){let E=T[x];if(m.setX(E,b[x*l]),l>=2&&m.setY(E,b[x*l+1]),l>=3&&m.setZ(E,b[x*l+2]),l>=4&&m.setW(E,b[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=e0[f.magFilter]||hn,u.minFilter=e0[f.minFilter]||Ni,u.wrapS=t0[f.wrapS]||hr,u.wrapT=t0[f.wrapT]||hr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==hn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){let g=new fn(m);g.needsUpdate=!0,d(g)}),t.load(ks.resolveURL(f,r.path),_,void 0,p)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),fs(f,o),f.userData.mimeType=o.mimeType||pw(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new sa,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ia,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Kr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){let h=i[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Xn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Nt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ri);let u=r.alphaMode||Wd.OPAQUE;if(u===Wd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ii&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ii&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ii){let h=r.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Xn)}return r.emissiveTexture!==void 0&&o!==ii&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),fs(h,r),t.associations.set(h,{materials:e}),r.extensions&&ro(i,h,r),h})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return n0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=dw(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=n0(new dn,c,t),c.mode===Ui.TRIANGLE_STRIP?f=f.then(d=>Vd(d,Nl)):c.mode===Ui.TRIANGLE_FAN&&(f=f.then(d=>Vd(d,_a))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?uw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let _=u[d],m=o[d],g,S=c[d];if(m.mode===Ui.TRIANGLES||m.mode===Ui.TRIANGLE_STRIP||m.mode===Ui.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=A&&v?new hl(_,S):new Jt(_,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ui.LINES)g=new dl(_,S);else if(m.mode===Ui.LINE_STRIP)g=new qr(_,S);else if(m.mode===Ui.LINE_LOOP)g=new pl(_,S);else if(m.mode===Ui.POINTS)g=new ml(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&fw(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),fs(g,r),m.extensions&&ro(i,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ro(i,h[0],r),h[0];let f=new _i;r.extensions&&ro(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new un(Vs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $r(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",S)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let A=0,v=f.length;A<v;A++){let T=f[A],b=d[A],x=p[A],y=_[A],E=m[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let R=n._createAnimationTracks(T,b,x,y,E);if(R)for(let D=0;D<R.length;D++)g.push(R[D])}let S=new Di(r,void 0,g);return fs(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,mw)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new G().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new na:c.length>1?u=new _i:c.length===1?u=c[0]:u=new Ct,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),fs(u,r),r.extensions&&ro(n,u,r),r.matrix!==void 0){let h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new _i;n.name&&(r.name=i.createUniqueName(n.name)),fs(r,n),n.extensions&&ro(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(mh(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof qn||f instanceof fn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}_r[r.path]===_r.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(_r[r.path]){case _r.weights:u=Us;break;case _r.rotation:u=Fs;break;case _r.translation:case _r.scale:u=mr;break;default:switch(n.itemSize){case 1:u=Us;break;case 2:case 3:default:u=mr;break}break}let h=i.interpolation!==void 0?cw[i.interpolation]:Hr,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new u(l[d]+"."+_r[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gp(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Fs?pp:xh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function gw(s,e,t){let n=e.attributes,i=new On;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){let u=gp(va[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new G,l=new G;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let _=gp(va[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ni;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function n0(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=mp[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Je.workingColorSpace!==Xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),fs(s,e),gw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hw(s,e.targets,t):s})}function Hs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function f0(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ma={duration:.5,overwrite:!1,delay:0},Op,wn,Ut,Bi=1e8,Et=1/Bi,wp=Math.PI*2,_w=wp/4,xw=0,d0=Math.sqrt,yw=Math.cos,vw=Math.sin,gn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Xs=function(e){return typeof e=="number"},Rh=function(e){return typeof e>"u"},ms=function(e){return typeof e=="object"},ci=function(e){return e!==!1},Up=function(){return typeof window<"u"},yh=function(e){return qt(e)||gn(e)},p0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,Sw=/random\([^)]+\)/g,Mw=/,\s*/g,s0=/(?:-?\.?\d|\.)+/gi,Fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,co=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bp=/[+-]=-?[.\d]+/,bw=/[^,'"\[\]\s]+/gi,Tw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,ds,Ap,kp,Si={},bh={},m0,g0=function(e){return(bh=ba(e,Si))&&Bn},Ch=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yl=function(e,t){return!t&&console.warn(e)},_0=function(e,t){return e&&(Si[e]=t)&&bh&&(bh[e]=t)||Si},Kl=function(){return 0},ww={suppressEvents:!0,isStart:!0,kill:!1},vh={suppressEvents:!0,kill:!1},Aw={suppressEvents:!0},zp={},yr=[],Ep={},x0,ai={},yp={},r0=30,Sh=[],Gp="",Vp=function(e){var t=e[0],n,i;if(ms(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Sh.length;i--&&!Sh[i].targetTest(t););n=Sh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new qp(e[i],n)))||e.splice(i,1);return e},vr=function(e){return e._gsap||Vp(ki(e))[0]._gsap},Hp=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():Rh(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},uo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ew=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Th=function(){var e=yr.length,t=yr.slice(0),n,i;for(Ep={},yr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wp=function(e){return!!(e._initted||e._startAt||e.add)},y0=function(e,t,n,i){yr.length&&!wn&&Th(),e.render(t,n,i||!!(wn&&t<0&&Wp(e))),yr.length&&!wn&&Th()},v0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bw).length<2?t:gn(e)?e.trim():e},S0=function(e){return e},Mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Rw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ba=function(e,t){for(var n in t)e[n]=t[n];return e},o0=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ms(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},wh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wl=function(e){var t=e.parent||Gt,n=e.keyframes?Rw(Fn(e.keyframes)):Mi;if(ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Cw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},M0=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ph=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},oo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rp=function(e,t,n,i){return e._startAt&&(wn?e._startAt.revert(vh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Iw=function s(e){return!e||e._ts&&s(e.parent)},a0=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Ah=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ih=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Lh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ih(e),n._dirty||oo(n,e)),e},b0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ah(e.rawTime(),t),(!t._dur||$l(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),oo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},ps=function(e,t,n,i){return t.parent&&Sr(t),t._start=zt((Xs(n)?n:n||e!==Gt?Fi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),M0(e,t,"_first","_last",e._sort?"_start":0),Cp(t)||(e._recent=t),i||b0(e,t),e._ts<0&&Lh(e,e._tTime),e},T0=function(e,t){return(Si.ScrollTrigger||Ch("scrollTrigger",t))&&Si.ScrollTrigger.create(t,e)},w0=function(e,t,n,i,r){if(Zp(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&x0!==li.frame)return yr.push(e),e._lazy=[r,i],1},Lw=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Cp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Dw=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Lw(e)&&!(!e._initted&&Cp(e))||(e._ts<0||e._dp._ts<0)&&!Cp(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=$l(0,e._tDur,t),u=Ta(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ta(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||wn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&w0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Rp(e,t,n,!0),e._onUpdate&&!n&&vi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!wn&&(vi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Nw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},wa=function(e,t,n,i){var r=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:zt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Lh(e,e._tTime=e._tDur*a),e.parent&&Ih(e),n||oo(e.parent,e),e},l0=function(e){return e instanceof Tn?oo(e):wa(e,e._dur)},Ow={_start:0,endTime:Kl,totalDuration:Kl},Fi=function s(e,t,n){var i=e.labels,r=e._recent||Ow,o=e.duration()>=Bi?r.endTime(!1):e._dur,a,l,c;return gn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Fn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xl=function(e,t,n){var i=Xs(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new $t(t[0],o,t[r+1])},Mr=function(e,t){return e||e===0?t(e):t},$l=function(e,t,n){return n<e?e:n>t?t:n},An=function(e,t){return!gn(e)||!(t=Tw.exec(e))?"":t[1]},Uw=function(e,t,n){return Mr(n,function(i){return $l(e,t,i)})},Pp=[].slice,A0=function(e,t){return e&&ms(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ms(e[0]))&&!e.nodeType&&e!==ds},Fw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return gn(i)&&!t||A0(i,1)?(r=n).push.apply(r,ki(i)):n.push(i)})||n},ki=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):gn(e)&&!n&&(Ap||!Aa())?Pp.call((t||kp).querySelectorAll(e),0):Fn(e)?Fw(e,n):A0(e)?Pp.call(e,0):e?[e]:[]},Ip=function(e){return e=ki(e)[0]||Yl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ki(t,n.querySelectorAll?n:n===e?Yl("Invalid scope")||kp.createElement("div"):e)}},E0=function(e){return e.sort(function(){return .5-Math.random()})},R0=function(e){if(qt(e))return e;var t=ms(e)?e:{each:e},n=ao(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return gn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,p){var _=(p||t).length,m=o[_],g,S,A,v,T,b,x,y,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!E){for(x=-Bi;x<(x=p[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],g=l?Math.min(E,_)*u-.5:i%E,S=E===Bi?0:l?_*h/E-.5:i/E|0,x=0,y=Bi,b=0;b<_;b++)A=b%E-g,v=S-(b/E|0),m[b]=T=c?Math.abs(c==="y"?v:A):d0(A*A+v*v),T>x&&(x=T),T<y&&(y=T);i==="random"&&E0(m),m.max=x-y,m.min=y,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=An(t.amount||t.each)||0,n=n&&_<0?F0(n):n}return _=(m[f]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},Lp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xs(n)?0:An(n))}},C0=function(e,t){var n=Fn(e),i,r;return!n&&ms(e)&&(i=n=e.radius||Bi,e.values?(e=ki(e.values),(r=!Xs(e[0]))&&(i*=i)):e=Lp(e.increment)),Mr(t,n?qt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Bi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||Xs(o)?u:u+An(o)}:Lp(e))},P0=function(e,t,n,i){return Mr(Fn(e)?!t:n===!0?!!(n=0):!i,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Bw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},kw=function(e,t){return function(n){return e(parseFloat(n))+(t||An(n))}},zw=function(e,t,n){return L0(e,t,0,1,n)},I0=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},Gw=function s(e,t,n){var i=t-e;return Fn(e)?I0(e,s(0,e.length),t):Mr(n,function(r){return(i+(r-e)%i)%i+e})},Vw=function s(e,t,n){var i=t-e,r=i*2;return Fn(e)?I0(e,s(0,e.length-1),t):Mr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ea=function(e){return e.replace(Sw,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Mw);return P0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},L0=function(e,t,n,i,r){var o=t-e,a=i-n;return Mr(r,function(l){return n+((l-e)/o*a||0)})},Hw=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=gn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(p){p*=h;var _=Math.min(f,~~p);return u[_](p-_)},n=t}else i||(e=ba(Fn(e)?[]:{},e));if(!u){for(l in t)Yp.call(a,e,l,"get",t[l]);r=function(p){return jp(p,a)||(o?e.p:e)}}}return Mr(n,r)},c0=function(e,t,n){var i=e.labels,r=Bi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},vi=function(e,t,n){var i=e.vars,r=i[t],o=Ut,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&yr.length&&Th(),a&&(Ut=a),u=l?r.apply(c,l):r.call(c),Ut=o,u},Vl=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&vi(e,"onInterrupt"),e},Sa,D0=[],N0=function(e){if(e)if(e=!e.name&&e.default||e,Up()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Kl,render:jp,add:Yp,kill:rA,modifier:sA,rawVars:0},o={targetTest:0,get:0,getSetter:Dh,aliases:{},register:0};if(Aa(),e!==i){if(ai[t])return;Mi(i,Mi(wh(e,r),o)),ba(i.prototype,ba(r,wh(e,o))),ai[i.prop=t]=i,e.targetTest&&(Sh.push(i),zp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_0(t,i),e.register&&e.register(Bn,i,Zn)}else D0.push(e)},At=255,Hl={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},vp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},O0=function(e,t,n){var i=e?Xs(e)?[e>>16,e>>8&At,e&At]:0:Hl.black,r,o,a,l,c,u,h,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hl[e])i=Hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(s0),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=vp(l+1/3,r,o),i[1]=vp(l,r,o),i[2]=vp(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Fp),n&&i.length<4&&(i[3]=1),i}else i=e.match(s0)||Hl.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/At,o=i[1]/At,a=i[2]/At,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},U0=function(e){var t=[],n=[],i=-1;return e.split(Ws).forEach(function(r){var o=r.match(co)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},u0=function(e,t,n){var i="",r=(e+i).match(Ws),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=O0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=U0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ws,"1").split(co),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ws),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Ws=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hl)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Ww=/hsl[a]?\(/,Xp=function(e){var t=e.join(" "),n;if(Ws.lastIndex=0,Ws.test(t))return n=Ww.test(t),e[1]=u0(e[1],n),e[0]=u0(e[0],n,U0(e[1])),!0},Zl,li=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,p=function _(m){var g=s()-i,S=m===!0,A,v,T,b;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,A=T-o,(A>0||S)&&(b=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=A+(A>=r?4:r-A),v=1),S||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](T,f,b,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){m0&&(!Ap&&Up()&&(ds=Ap=window,kp=ds.document||{},Si.gsap=Bn,(ds.gsapVersions||(ds.gsapVersions=[])).push(Bn.version),g0(bh||ds.GreenSockGlobals||!ds.gsap&&ds||{}),D0.forEach(N0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Zl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Zl=0,c=Kl},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,g,S){var A=g?function(v,T,b,x){m(v,T,b,x),h.remove(A)}:m;return h.remove(m),a[S?"unshift":"push"](A),Aa(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),Aa=function(){return!Zl&&li.wake()},at={},Xw=/^[\d.\-M][\d.\-,\s]/,qw=/["']/g,Yw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(qw,"").trim():+c,i=l.substr(a+1).trim();return t},Kw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Zw=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Yw(t[1])]:Kw(e).split(",").map(v0)):at._CE&&Xw.test(e)?at._CE("",e):n},F0=function(e){return function(t){return 1-e(1-t)}},B0=function s(e,t){for(var n=e._first,i;n;)n instanceof Tn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ao=function(e,t){return e&&(qt(e)?e:at[e]||Zw(e))||t},ho=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Kn(e,function(a){at[a]=Si[a]=r,at[o=a.toLowerCase()]=n;for(var l in r)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=r[l]}),r},k0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sp=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/wp*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*vw((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:k0(a);return r=wp/r,l.config=function(c,u){return s(e,c,u)},l},Mp=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:k0(n);return i.config=function(r){return s(e,r)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ho(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;ho("Elastic",Sp("in"),Sp("out"),Sp());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ho("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ho("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ho("Circ",function(s){return-(d0(1-s*s)-1)});ho("Sine",function(s){return s===1?1:-yw(s*_w)+1});ho("Back",Mp("in"),Mp("out"),Mp());at.SteppedEase=at.steps=Si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Et;return function(a){return((i*$l(0,o,a)|0)+r)*n}}};Ma.ease=at["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gp+=s+","+s+"Params,"});var qp=function(e,t){this.id=xw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Hp,this.set=t?t.getSetter:Dh},Jl=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,wa(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Zl||li.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,wa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Aa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Lh(this,n),!r._dp||r.parent||b0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ps(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),y0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+a0(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+a0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ta(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ah(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime($l(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ih(this),Pw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ps(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ah(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Aw);var i=wn;return wn=n,Wp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,l0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,l0(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Fi(this,n),ci(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ci(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Et)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=qt(n)?n:S0,l=function(){var u=i.then;i.then=null,r&&r(),qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Vl(this)},s})();Mi(Jl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Tn=(function(s){f0(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ci(n.sortChildren),Gt&&ps(n.parent||Gt,Hs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&T0(Hs(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Xl(0,arguments,this),this},t.from=function(i,r,o){return Xl(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Xl(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Wl(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $t(i,r,Fi(this,o),1),this},t.call=function(i,r,o){return ps(this,$t.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(i,o,Fi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Wl(o).immediateRender=ci(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,Wl(a).immediateRender=ci(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,m,g,S,A,v,T,b,x;if(this!==Gt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,A=this._ts,g=!A,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=zt(u%m),u===l?(_=this._repeat,f=c):(T=zt(u/m),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=Ta(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),b&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var y=b&&T&1,E=y===(b&&_&1);if(_<T&&(y=!y),a=y?0:u%c?c:u,this._lock=1,this.render(a||(x?0:zt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&vi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;B0(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Nw(this,zt(a),zt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!r&&!T&&(vi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!g){S=0,p&&(u+=this._zTime=-Et);break}}d=p}else{d=this._last;for(var R=i<0?i:f;d;){if(p=d._prev,(d._act||R<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,o||wn&&Wp(d)),f!==this._time||!this._ts&&!g){S=0,p&&(u+=this._zTime=R?-Et:Et);break}}d=p}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=v,Ih(this),this.render(i,r,o);this._onUpdate&&!r&&vi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(vi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Xs(r)||(r=Fi(this,r,i)),!(i instanceof Jl)){if(Fn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(gn(i))return this.addLabel(i,r);if(qt(i))i=$t.delayedCall(0,i);else return this}return this!==i?ps(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return gn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&Ph(this,i),i===this._recent&&(this._recent=this._last),oo(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Fi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=$t.delayedCall(0,r||Kl,o);return a.data="isPause",this._hasPause=1,ps(this,a,Fi(this,i))},t.removePause=function(i){var r=this._first;for(i=Fi(this,i);r;)r._start===i&&r.data==="isPause"&&Sr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ki(i),l=this._first,c=Xs(r),u;l;)l instanceof $t?Ew(l._targets,a)&&(c?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Fi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=$t.to(o,Mi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&wa(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},r));return f?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Mi({startAt:{time:Fi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),c0(this,Fi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),c0(this,Fi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return oo(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),oo(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Bi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ps(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;wa(o,o===Gt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Gt._ts&&(y0(Gt,Ah(i,Gt)),x0=li.frame),li.frame>=r0){r0+=ui.autoSleep||120;var r=Gt._first;if((!r||!r._ts)&&ui.autoSleep&&li._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||li.sleep()}}},e})(Jl);Mi(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jw=function(e,t,n,i,r,o,a){var l=new Zn(this._pt,e,t,0,1,$p,null,r),c=0,u=0,h,f,d,p,_,m,g,S;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ea(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(xp)||[];h=xp.exec(i);)p=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?uo(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=xp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bp.test(i)||g)&&(l.e=0),this._pt=l,l},Yp=function(e,t,n,i,r,o,a,l,c,u){qt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:qt(h)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=qt(h)?c?tA:V0:Jp,p;if(gn(i)&&(~i.indexOf("random(")&&(i=Ea(i)),i.charAt(1)==="="&&(p=uo(f,i)+(An(f)||0),(p||p===0)&&(i=p))),!u||f!==i||Dp)return!isNaN(f*i)&&i!==""?(p=new Zn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?iA:H0,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&Ch(t,i),Jw.call(this,e,t,f,i,d,l||ui.stringFilter,c))},$w=function(e,t,n,i,r){if(qt(e)&&(e=ql(e,r,t,n,i)),!ms(e)||e.style&&e.nodeType||Fn(e)||p0(e))return gn(e)?ql(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ql(e[a],r,t,n,i);return o},Kp=function(e,t,n,i,r,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(r,a.rawVars?t[e]:$w(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Zn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Sa))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xr,Dp,Zp=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,S=g&&g.data==="nested"?g.vars.targets:m,A=e._overwrite==="auto"&&!Op,v=e.timeline,T,b,x,y,E,R,D,L,B,I,k,W,F;if(v&&(!f||!r)&&(r="none"),e._ease=ao(r,Ma.ease),e._yEase=h?F0(ao(h===!0?r:h,Ma.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(L=m[0]?vr(m[0]).harness:0,W=L&&i[L.prop],T=wh(i,zp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?vh:ww),_._lazy=0),o){if(Sr(e._startAt=$t.set(m,Mi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return vi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!a&&!d)&&e._startAt.revert(vh),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),x=Mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:g},T),W&&(x[L.prop]=W),Sr(e._startAt=$t.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(vh):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ci(l)||l&&!p,b=0;b<m.length;b++){if(E=m[b],D=E._gsap||Vp(m)[b]._gsap,e._ptLookup[b]=I={},Ep[D.id]&&yr.length&&Th(),k=S===m?b:S.indexOf(E),L&&(B=new L).init(E,W||T,e,k,S)!==!1&&(e._pt=y=new Zn(e._pt,E,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(te){I[te]=y}),B.priority&&(R=1)),!L||W)for(x in T)ai[x]&&(B=Kp(x,T,e,k,E,S))?B.priority&&(R=1):I[x]=y=Yp.call(e,E,x,"get",T[x],k,S,0,i.stringFilter);e._op&&e._op[b]&&e.kill(E,e._op[b]),A&&e._pt&&(xr=e,Gt.killTweensOf(E,I,e.globalTime(t)),F=!e.parent,xr=0),e._pt&&l&&(Ep[D.id]=1)}R&&Qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&v.render(Bi,!0,!0)},jw=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Dp=1,e.vars[t]="+=0",Zp(e,a),Dp=0,l?Yl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Yt(n)+An(h.e)),h.b&&(h.b=u.s+An(h.b))},Qw=function(e,t){var n=e[0]?vr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ba({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},eA=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Fn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ql=function(e,t,n,i,r){return qt(e)?e.call(t,n,i,r):gn(e)&&~e.indexOf("random(")?Ea(e):e},z0=Gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",G0={};Kn(z0+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return G0[s]=1});var $t=(function(s){f0(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Wl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,S=i.parent||Gt,A=(Fn(n)||p0(n)?Xs(n[0]):"length"in i)?[n]:ki(n),v,T,b,x,y,E,R,D;if(a._targets=A.length?Vp(A):Yl("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||yh(c)||yh(u)){if(i=a.vars,v=a.timeline=new Tn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:A}),v.kill(),v.parent=v._dp=Hs(a),v._start=0,f||yh(c)||yh(u)){if(x=A.length,R=f&&R0(f),ms(f))for(y in f)~z0.indexOf(y)&&(D||(D={}),D[y]=f[y]);for(T=0;T<x;T++)b=wh(i,G0),b.stagger=0,g&&(b.yoyoEase=g),D&&ba(b,D),E=A[T],b.duration=+ql(c,Hs(a),T,E,A),b.delay=(+ql(u,Hs(a),T,E,A)||0)-a._delay,!f&&x===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(E,b,R?R(T,E,A):0),v._ease=at.none;v.duration()?c=u=0:a.timeline=0}else if(p){Wl(Mi(v.vars.defaults,{ease:"none"})),v._ease=ao(p.ease||i.ease||"none");var L=0,B,I,k;if(Fn(p))p.forEach(function(W){return v.to(A,W,">")}),v.duration();else{b={};for(y in p)y==="ease"||y==="easeEach"||eA(y,p[y],b,p.easeEach);for(y in b)for(B=b[y].sort(function(W,F){return W.t-F.t}),L=0,T=0;T<B.length;T++)I=B[T],k={ease:I.e,duration:(I.t-(T?B[T-1].t:0))/100*c},k[y]=I.v,v.to(A,k,L),L+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Op&&(xr=Hs(a),Gt.killTweensOf(A),xr=0),ps(S,Hs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===zt(S._time)&&ci(h)&&Iw(Hs(a))&&S.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),m&&T0(Hs(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Et&&!u?l:i<Et?0:i,f,d,p,_,m,g,S,A,v;if(!c)Dw(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=zt(h%_),h===l?(p=this._repeat,f=c):(m=zt(h/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(v=this._yEase,f=c-f),m=Ta(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&(A&&this._yEase&&B0(A,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(w0(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&h&&!r&&!m&&(vi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Rp(this,i,r,o),vi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&vi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Rp(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!r&&!(u&&!a)&&(h||a||g)&&(vi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Zl||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Zp(this,c),u=this._ease(c/this._dur),jw(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Lh(this,0),this.parent||M0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Vl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,xr&&xr.vars.overwrite!==!0)._first||Vl(this),this.parent&&o!==this.timeline.totalDuration()&&wa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ki(i):a,c=this._ptLookup,u=this._pt,h,f,d,p,_,m,g;if((!r||r==="all")&&Cw(a,l))return r==="all"&&(this._pt=0),Vl(this);for(h=this._op=this._op||[],r!=="all"&&(gn(r)&&(_={},Kn(r,function(S){return _[S]=1}),r=_),r=Qw(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(h[g]=r,p=f,d={}):(d=h[g]=h[g]||{},p=r);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ph(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Vl(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Xl(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Xl(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Gt.killTweensOf(i,r,o)},e})(Jl);Mi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(s){$t[s]=function(){var e=new Tn,t=Pp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Jp=function(e,t,n){return e[t]=n},V0=function(e,t,n){return e[t](n)},tA=function(e,t,n,i){return e[t](i.fp,n)},nA=function(e,t,n){return e.setAttribute(t,n)},Dh=function(e,t){return qt(e[t])?V0:Rh(e[t])&&e.setAttribute?nA:Jp},H0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},iA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$p=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},jp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sA=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},rA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ph(this,t,"_pt"):t.dep||(n=1),t=i;return!n},oA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Qp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Zn=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||H0,this.d=l||this,this.set=c||Jp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=oA,this.m=n,this.mt=r,this.tween=i},s})();Kn(Gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return zp[s]=1});Si.TweenMax=Si.TweenLite=$t;Si.TimelineLite=Si.TimelineMax=Tn;Gt=new Tn({sortChildren:!1,defaults:Ma,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=Xp;var lo=[],Mh={},aA=[],h0=0,lA=0,bp=function(e){return(Mh[e]||aA).map(function(t){return t()})},Np=function(){var e=Date.now(),t=[];e-h0>2&&(bp("matchMediaInit"),lo.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ds.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),bp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),h0=e,bp("matchMedia"))},W0=(function(){function s(t,n){this.selector=n&&Ip(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lA++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){qt(n)&&(r=i,i=n,n=qt);var o=this,a=function(){var c=Ut,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ip(r)),Ut=o,h=i.apply(o,arguments),qt(h)&&o._r.push(h),Ut=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=lo.length;o--;)lo[o].id===this.id&&lo.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),cA=(function(){function s(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ms(n)||(n={matches:n});var o=new W0(0,r||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ds.matchMedia(n[c]),l&&(lo.indexOf(o)<0&&lo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Np):l.addEventListener("change",Np)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Eh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return N0(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){gn(e)&&(e=ki(e)[0]);var r=vr(e||{}).get,o=n?S0:v0;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||r)(e,t,n,i)):function(a,l,c){return o((ai[a]&&ai[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ki(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=ai[t],a=vr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Sa._pt=0,h.init(e,n?u+n:u,Sa,0,[e]),h.render(1,h),Sa._pt&&jp(1,Sa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Bn.to(e,Mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ao(e.ease,Ma.ease)),o0(Ma,e||{})},config:function(e){return o0(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ai[a]&&!Si[a]&&Yl(t+" effect requires "+a+" plugin.")}),yp[t]=function(a,l,c){return n(ki(a),Mi(l||{},r),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(yp[t](a,ms(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=ao(t)},parseEase:function(e,t){return arguments.length?ao(e,t):at},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,r;for(n.smoothChildTiming=ci(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&ps(n,i,i._start-i._delay),i=r;return ps(Gt,n,0),n},context:function(e,t){return e?new W0(e,t):Ut},matchMedia:function(e){return new cA(e)},matchMediaRefresh:function(){return lo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Np()},addEventListener:function(e,t){var n=Mh[e]||(Mh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Mh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Gw,wrapYoyo:Vw,distribute:R0,random:P0,snap:C0,normalize:zw,getUnit:An,clamp:Uw,splitColor:O0,toArray:ki,selector:Ip,mapRange:L0,pipe:Bw,unitize:kw,interpolate:Hw,shuffle:E0},install:g0,effects:yp,ticker:li,updateRoot:Tn.updateRoot,plugins:ai,globalTimeline:Gt,core:{PropTween:Zn,globals:_0,Tween:$t,Timeline:Tn,Animation:Jl,getCache:vr,_removeLinkedListItem:Ph,reverting:function(){return wn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Op=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Eh[s]=$t[s]});li.add(Tn.updateRoot);Sa=Eh.to({},{duration:0});var uA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hA=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=uA(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Tp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(gn(r)&&(l={},Kn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}hA(a,r)}}}},Bn=Eh.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Tp("roundProps",Lp),Tp("modifiers"),Tp("snap",C0))||Eh;$t.version=Tn.version=Bn.version="3.14.2";m0=1;Up()&&Aa();var fA=at.Power0,dA=at.Power1,pA=at.Power2,mA=at.Power3,gA=at.Power4,_A=at.Linear,xA=at.Quad,yA=at.Cubic,vA=at.Quart,SA=at.Quint,MA=at.Strong,bA=at.Elastic,TA=at.Back,wA=at.SteppedEase,AA=at.Bounce,EA=at.Sine,RA=at.Expo,CA=at.Circ;var X0,br,Ca,rm,go,PA,q0,om,IA=function(){return typeof window<"u"},Ys={},mo=180/Math.PI,Pa=Math.PI/180,Ra=Math.atan2,Y0=1e8,am=/([A-Z])/g,LA=/(left|right|width|margin|padding|x)/i,DA=/[\s,\(]\S/,gs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},NA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},UA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},BA=function(e,t,n){return e.style[t]=n},kA=function(e,t,n){return e.style.setProperty(t,n)},zA=function(e,t,n){return e._gsap[t]=n},GA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},VA=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},HA=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Vt="transform",hi=Vt+"Origin",WA=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Ys&&r){if(this.tfm=this.tfm||{},e!=="transform")e=gs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qs(i,a)}):this.tfm[e]=o.x?o[e]:qs(i,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return gs.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Vt}(r||t)&&this.props.push(e,t,r[e])},ix=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(am,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=om(),(!r||!r.isStart)&&!n[Vt]&&(ix(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sx=function(e,t){var n={target:e,props:[],revert:XA,save:WA};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},rx,nm=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n&&n.style?n:br.createElement(e)},bi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(am,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ia(t)||t,1)||""},K0="O,Moz,ms,Ms,Webkit".split(","),Ia=function(e,t,n){var i=t||go,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(K0[o]+e in r););return o<0?null:(o===3?"ms":o>=0?K0[o]:"")+e},im=function(){IA()&&window.document&&(X0=window,br=X0.document,Ca=br.documentElement,go=nm("div")||{style:{}},PA=nm("div"),Vt=Ia(Vt),hi=Vt+"Origin",go.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rx=!!Ia("perspective"),om=Bn.core.reverting,rm=1)},Z0=function(e){var t=e.ownerSVGElement,n=nm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ca.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ca.removeChild(n),r},J0=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ox=function(e){var t,n;try{t=e.getBBox()}catch{t=Z0(e),n=1}return t&&(t.width||t.height)||n||(t=Z0(e)),t&&!t.width&&!t.x&&!t.y?{x:+J0(e,["x","cx","x1"])||0,y:+J0(e,["y","cy","y1"])||0,width:0,height:0}:t},ax=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ox(e))},wr=function(e,t){if(t){var n=e.style,i;t in Ys&&t!==hi&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(am,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,i,r,o){var a=new Zn(e._pt,t,n,0,1,o?nx:tx);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},$0={deg:1,rad:1,turn:1},qA={grid:1,flex:1},Ar=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=go.style,l=LA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",p,_,m,g;if(i===o||!r||$0[i]||$0[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),g=e.getCTM&&ax(e),(d||o==="%")&&(Ys[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Yt(d?r/p*h:r/100*p);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===br||!_.appendChild)&&(_=br.body),m=_._gsap,m&&d&&m.width&&l&&m.time===li.time&&!m.uncache)return Yt(r/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,p=e[u],S?e.style[t]=S:wr(e,t)}else(d||o==="%")&&!qA[bi(_,"display")]&&(a.position=bi(e,"position")),_===e&&(a.position="static"),_.appendChild(go),p=go[u],_.removeChild(go),a.position="absolute";return l&&d&&(m=vr(_),m.time=li.time,m.width=_[u]),Yt(f?p*r/h:p&&r?h/p*r:0)},qs=function(e,t,n,i){var r;return rm||im(),t in gs&&t!=="transform"&&(t=gs[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ys[t]&&t!=="transform"?(r=ec(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Oh(bi(e,hi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Nh[t]&&Nh[t](e,t,n)||bi(e,t)||Hp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ar(e,t,r,n)+n:r},YA=function(e,t,n,i){if(!n||n==="none"){var r=Ia(t,e,1),o=r&&bi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=bi(e,"borderTopColor"))}var a=new Zn(this._pt,e.style,t,0,1,$p),l=0,c=0,u,h,f,d,p,_,m,g,S,A,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=bi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=bi(e,t)||i,_?e.style[t]=_:wr(e,t)),u=[n,i],Xp(u),n=u[0],i=u[1],f=n.match(co)||[],T=i.match(co)||[],T.length){for(;h=co.exec(i);)m=h[0],S=i.substring(l,h.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=uo(d,m)+v),g=parseFloat(m),A=m.substr((g+"").length),l=co.lastIndex-A.length,A||(A=A||ui.units[t]||v,l===i.length&&(i+=A,a.e+=A)),v!==A&&(d=Ar(e,t,_,A)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?nx:tx;return Bp.test(i)&&(a.e=0),this._pt=a,a},j0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},KA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=j0[n]||n,t[1]=j0[i]||i,t.join(" ")},ZA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ys[a]&&(l=1,a=a==="transformOrigin"?hi:Vt),wr(n,a);l&&(wr(n,Vt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ec(n,1),o.uncache=1,ix(i)))}},Nh={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Zn(e._pt,t,n,0,0,ZA);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ql=[1,0,0,1,0,0],lx={},cx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Q0=function(e){var t=bi(e,Vt);return cx(t)?Ql:t.substr(7).match(Fp).map(Yt)},lm=function(e,t){var n=e._gsap||vr(e),i=e.style,r=Q0(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ql:r):(r===Ql&&!e.offsetParent&&e!==Ca&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ca.appendChild(e)),r=Q0(e),l?i.display=l:wr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ca.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},sm=function(e,t,n,i,r,o){var a=e._gsap,l=r||lm(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],S=l[5],A=t.split(" "),v=parseFloat(A[0])||0,T=parseFloat(A[1])||0,b,x,y,E;n?l!==Ql&&(x=d*m-p*_)&&(y=v*(m/x)+T*(-_/x)+(_*S-m*g)/x,E=v*(-p/x)+T*(d/x)-(d*S-p*g)/x,v=y,T=E):(b=ox(e),v=b.x+(~A[0].indexOf("%")?v/100*b.width:v),T=b.y+(~(A[1]||A[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(g=v-c,S=T-u,a.xOffset=h+(g*d+S*_)-g,a.yOffset=f+(g*p+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[hi]="0px 0px",o&&(Tr(o,a,"xOrigin",c,v),Tr(o,a,"yOrigin",u,T),Tr(o,a,"xOffset",h,a.xOffset),Tr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},ec=function(e,t){var n=e._gsap||new qp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=bi(e,hi)||"0",u,h,f,d,p,_,m,g,S,A,v,T,b,x,y,E,R,D,L,B,I,k,W,F,te,q,P,ne,Se,Be,Z,ue;return u=h=f=_=m=g=S=A=v=0,d=p=1,n.svg=!!(e.getCTM&&ax(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),x=lm(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),sm(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,b=n.yOrigin||0,x!==Ql&&(D=x[0],L=x[1],B=x[2],I=x[3],u=k=x[4],h=W=x[5],x.length===6?(d=Math.sqrt(D*D+L*L),p=Math.sqrt(I*I+B*B),_=D||L?Ra(L,D)*mo:0,S=B||I?Ra(B,I)*mo+_:0,S&&(p*=Math.abs(Math.cos(S*Pa))),n.svg&&(u-=T-(T*D+b*B),h-=b-(T*L+b*I))):(ue=x[6],Be=x[7],P=x[8],ne=x[9],Se=x[10],Z=x[11],u=x[12],h=x[13],f=x[14],y=Ra(ue,Se),m=y*mo,y&&(E=Math.cos(-y),R=Math.sin(-y),F=k*E+P*R,te=W*E+ne*R,q=ue*E+Se*R,P=k*-R+P*E,ne=W*-R+ne*E,Se=ue*-R+Se*E,Z=Be*-R+Z*E,k=F,W=te,ue=q),y=Ra(-B,Se),g=y*mo,y&&(E=Math.cos(-y),R=Math.sin(-y),F=D*E-P*R,te=L*E-ne*R,q=B*E-Se*R,Z=I*R+Z*E,D=F,L=te,B=q),y=Ra(L,D),_=y*mo,y&&(E=Math.cos(y),R=Math.sin(y),F=D*E+L*R,te=k*E+W*R,L=L*E-D*R,W=W*E-k*R,D=F,k=te),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Yt(Math.sqrt(D*D+L*L+B*B)),p=Yt(Math.sqrt(W*W+ue*ue)),y=Ra(k,W),S=Math.abs(y)>2e-4?y*mo:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cx(bi(e,Vt)),F&&e.setAttribute("transform",F))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Yt(d),n.scaleY=Yt(p),n.rotation=Yt(_)+a,n.rotationX=Yt(m)+a,n.rotationY=Yt(g)+a,n.skewX=S+a,n.skewY=A+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hi]=Oh(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?$A:rx?ux:JA,n.uncache=0,n},Oh=function(e){return(e=e.split(" "))[0]+" "+e[1]},em=function(e,t,n){var i=An(t);return Yt(parseFloat(t)+parseFloat(Ar(e,"x",n+"px",i)))+i},JA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ux(e,t)},fo="0deg",jl="0px",po=") ",ux=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,S=n.target,A=n.zOrigin,v="",T=g==="auto"&&e&&e!==1||g===!0;if(A&&(h!==fo||u!==fo)){var b=parseFloat(u)*Pa,x=Math.sin(b),y=Math.cos(b),E;b=parseFloat(h)*Pa,E=Math.cos(b),o=em(S,o,x*E*-A),a=em(S,a,-Math.sin(b)*-A),l=em(S,l,y*E*-A+A)}m!==jl&&(v+="perspective("+m+po),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(T||o!==jl||a!==jl||l!==jl)&&(v+=l!==jl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+po),c!==fo&&(v+="rotate("+c+po),u!==fo&&(v+="rotateY("+u+po),h!==fo&&(v+="rotateX("+h+po),(f!==fo||d!==fo)&&(v+="skew("+f+", "+d+po),(p!==1||_!==1)&&(v+="scale("+p+", "+_+po),S.style[Vt]=v||"translate(0, 0)"},$A=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,S=n.forceCSS,A=parseFloat(o),v=parseFloat(a),T,b,x,y,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Pa,c*=Pa,T=Math.cos(l)*h,b=Math.sin(l)*h,x=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=Pa,E=Math.tan(c-u),E=Math.sqrt(1+E*E),x*=E,y*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),T*=E,b*=E)),T=Yt(T),b=Yt(b),x=Yt(x),y=Yt(y)):(T=h,y=f,b=x=0),(A&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(A=Ar(d,"x",o,"px"),v=Ar(d,"y",a,"px")),(p||_||m||g)&&(A=Yt(A+p-(p*T+_*x)+m),v=Yt(v+_-(p*b+_*y)+g)),(i||r)&&(E=d.getBBox(),A=Yt(A+i/100*E.width),v=Yt(v+r/100*E.height)),E="matrix("+T+","+b+","+x+","+y+","+A+","+v+")",d.setAttribute("transform",E),S&&(d.style[Vt]=E)},jA=function(e,t,n,i,r){var o=360,a=gn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?mo:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Y0)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Y0)%o-~~(c/o)*o)),e._pt=f=new Zn(e._pt,t,n,i,c,NA),f.e=u,f.u="deg",e._props.push(n),f},ex=function(e,t){for(var n in t)e[n]=t[n];return e},QA=function(e,t,n){var i=ex({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Vt]=t,a=ec(n,1),wr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],o[Vt]=t,a=ec(n,1),o[Vt]=c);for(l in Ys)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=An(c),p=An(u),h=d!==p?Ar(n,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new Zn(e._pt,a,l,h,f-h,tm),e._pt.u=p||0,e._props.push(l));ex(a,i)};Kn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Nh[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return qs(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var cm={name:"css",register:im,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,p,_,m,g,S,A,v,T,b,x,y,E;rm||im(),this.styles=this.styles||sx(e),y=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ai[_]&&Kp(_,t,n,i,e,r)))){if(d=typeof u,p=Nh[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ea(u)),p)p(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ws.lastIndex=0,Ws.test(c)||(m=An(c),g=An(u),g?m!==g&&(c=Ar(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),y.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],gn(c)&&~c.indexOf("random(")&&(c=Ea(c)),An(c+"")||c==="auto"||(c+=ui.units[_]||An(qs(e,_))||""),(c+"").charAt(1)==="="&&(c=qs(e,_))):c=qs(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in gs&&(_==="autoAlpha"&&(f===1&&qs(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,a.visibility),Tr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=gs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Ys,A){if(this.styles.save(_),E=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=bi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=bi(e,"perspective"),R?e.style.perspective=R:wr(e,"perspective")}h=parseFloat(u)}if(v||(T=e._gsap,T.renderTransform&&!t.parseTransform||ec(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new Zn(this._pt,a,Vt,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new Zn(this._pt,T,"scaleY",T.scaleY,(S?uo(T.scaleY,S+h):h)-T.scaleY||0,tm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(hi,0,a[hi]),u=KA(u),T.svg?sm(e,u,0,b,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==T.zOrigin&&Tr(this,T,"zOrigin",T.zOrigin,g),Tr(this,a,_,Oh(c),Oh(u)));continue}else if(_==="svgOrigin"){sm(e,u,1,b,0,this);continue}else if(_ in lx){jA(this,T,_,f,S?uo(f,S+u):u);continue}else if(_==="smoothOrigin"){Tr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){QA(this,u,e);continue}}else _ in a||(_=Ia(_)||_);if(A||(h||h===0)&&(f||f===0)&&!DA.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),g=An(u)||(_ in ui.units?ui.units[_]:m),m!==g&&(f=Ar(e,_,c,g)),this._pt=new Zn(this._pt,A?T:a,_,f,(S?uo(f,S+h):h)-f,!A&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?FA:tm),this._pt.u=g||0,A&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=UA):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=OA);else if(_ in a)YA.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){Ch(_,u);continue}A||(_ in a?y.push(_,0,a[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,c||e[_])),o.push(_)}}x&&Qp(this)},render:function(e,t){if(t.tween._time||!om())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qs,aliases:gs,getSetter:function(e,t,n){var i=gs[t];return i&&i.indexOf(",")<0&&(t=i),t in Ys&&t!==hi&&(e._gsap.x||qs(e,"x"))?n&&q0===n?t==="scale"?GA:zA:(q0=n||{})&&(t==="scale"?VA:HA):e.style&&!Rh(e.style[t])?BA:~t.indexOf("-")?kA:Dh(e,t)},core:{_removeProperty:wr,_getMatrix:lm}};Bn.utils.checkPrefix=Ia;Bn.core.getStyleSaver=sx;(function(s,e,t,n){var i=Kn(s+","+e+","+t,function(r){Ys[r]=1});Kn(e,function(r){ui.units[r]="deg",lx[r]=1}),gs[i[13]]=s+","+e,Kn(n,function(r){var o=r.split(":");gs[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ui.units[s]="px"});Bn.registerPlugin(cm);var tc=Bn.registerPlugin(cm)||Bn,XC=tc.core.Tween;function hx(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function e1(s,e,t){return e&&hx(s.prototype,e),t&&hx(s,t),s}var En,Bh,t1,Ti,Er,Rr,Da,dx,_o,ic,px,Ks,ji,mx,gx=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},_x=1,La=[],je=[],Qi=[],sc=Date.now,um=function(e,t){return t},n1=function(){var e=ic.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,Qi),je=n,Qi=i,um=function(o,a){return t[o](a)}},Js=function(e,t){return~Qi.indexOf(e)&&Qi[Qi.indexOf(e)+1][t]},rc=function(e){return!!~px.indexOf(e)},$n=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Jn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Uh="scrollLeft",Fh="scrollTop",hm=function(){return Ks&&Ks.isPressed||je.cache++},kh=function(e,t){var n=function i(r){if(r||r===0){_x&&(Ti.history.scrollRestoration="manual");var o=Ks&&Ks.isPressed;r=i.v=Math.round(r)||(Ks&&Ks.iOS?1:0),e(r),i.cacheID=je.cache,o&&um("ss",r)}else(t||je.cache!==i.cacheID||um("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},kn={s:Uh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:kh(function(s){return arguments.length?Ti.scrollTo(s,rn.sc()):Ti.pageXOffset||Er[Uh]||Rr[Uh]||Da[Uh]||0})},rn={s:Fh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:kn,sc:kh(function(s){return arguments.length?Ti.scrollTo(kn.sc(),s):Ti.pageYOffset||Er[Fh]||Rr[Fh]||Da[Fh]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},i1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zs=function(e,t){var n=t.s,i=t.sc;rc(e)&&(e=Er.scrollingElement||Rr);var r=je.indexOf(e),o=i===rn.sc?1:2;!~r&&(r=je.push(e)-1),je[r+o]||$n(e,"scroll",hm);var a=je[r+o],l=a||(je[r+o]=kh(Js(e,n),!0)||(rc(e)?i:kh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},zh=function(e,t,n){var i=e,r=e,o=sc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=sc();_||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(p){var _=a,m=r,g=sc();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},nc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},xx=function(){ic=En.core.globals().ScrollTrigger,ic&&ic.core&&n1()},yx=function(e){return En=e||gx(),!Bh&&En&&typeof document<"u"&&document.body&&(Ti=window,Er=document,Rr=Er.documentElement,Da=Er.body,px=[Ti,Er,Rr,Da],t1=En.utils.clamp,mx=En.core.context||function(){},_o="onpointerenter"in Da?"pointer":"mouse",dx=Kt.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ji=Kt.eventTypes=("ontouchstart"in Rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _x=0},500),xx(),Bh=1),Bh};kn.op=rn;je.cache=0;var Kt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Bh||yx(En)||console.warn("Please gsap.registerPlugin(Observer)"),ic||xx();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,S=n.onDrag,A=n.onPress,v=n.onRelease,T=n.onRight,b=n.onLeft,x=n.onUp,y=n.onDown,E=n.onChangeX,R=n.onChangeY,D=n.onChange,L=n.onToggleX,B=n.onToggleY,I=n.onHover,k=n.onHoverEnd,W=n.onMove,F=n.ignoreCheck,te=n.isNormalizer,q=n.onGestureStart,P=n.onGestureEnd,ne=n.onWheel,Se=n.onEnable,Be=n.onDisable,Z=n.onClick,ue=n.scrollSpeed,ve=n.capture,we=n.allowClicks,me=n.lockAxis,De=n.onLockAxis;this.target=a=jn(a)||Rr,this.vars=n,d&&(d=En.utils.toArray(d)),i=i||1e-9,r=r||0,p=p||1,ue=ue||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ti.getComputedStyle(Da).lineHeight)||22);var xt,Ae,He,Ie,Ue,ht,lt,K=this,tt=0,jt=0,Mt=n.passive||!u&&n.passive!==!1,ot=Zs(a,kn),Ht=Zs(a,rn),Zt=ot(),U=Ht(),dt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ji[0]==="pointerdown",ct=rc(a),Ge=a.ownerDocument||Er,he=[0,0,0],ft=[0,0,0],Le=0,ke=function(){return Le=sc()},C=function(pe,se){return(K.event=pe)&&d&&i1(pe.target,d)||se&&dt&&pe.pointerType!=="touch"||F&&F(pe,se)},M=function(){K._vx.reset(),K._vy.reset(),Ae.pause(),h&&h(K)},V=function(){var pe=K.deltaX=fx(he),se=K.deltaY=fx(ft),Q=Math.abs(pe)>=i,_e=Math.abs(se)>=i;D&&(Q||_e)&&D(K,pe,se,he,ft),Q&&(T&&K.deltaX>0&&T(K),b&&K.deltaX<0&&b(K),E&&E(K),L&&K.deltaX<0!=tt<0&&L(K),tt=K.deltaX,he[0]=he[1]=he[2]=0),_e&&(y&&K.deltaY>0&&y(K),x&&K.deltaY<0&&x(K),R&&R(K),B&&K.deltaY<0!=jt<0&&B(K),jt=K.deltaY,ft[0]=ft[1]=ft[2]=0),(Ie||He)&&(W&&W(K),He&&(m&&He===1&&m(K),S&&S(K),He=0),Ie=!1),ht&&!(ht=!1)&&De&&De(K),Ue&&(ne(K),Ue=!1),xt=0},re=function(pe,se,Q){he[Q]+=pe,ft[Q]+=se,K._vx.update(pe),K._vy.update(se),c?xt||(xt=requestAnimationFrame(V)):V()},ie=function(pe,se){me&&!lt&&(K.axis=lt=Math.abs(pe)>Math.abs(se)?"x":"y",ht=!0),lt!=="y"&&(he[2]+=pe,K._vx.update(pe,!0)),lt!=="x"&&(ft[2]+=se,K._vy.update(se,!0)),c?xt||(xt=requestAnimationFrame(V)):V()},ce=function(pe){if(!C(pe,1)){pe=nc(pe,u);var se=pe.clientX,Q=pe.clientY,_e=se-K.x,ee=Q-K.y,be=K.isDragging;K.x=se,K.y=Q,(be||(_e||ee)&&(Math.abs(K.startX-se)>=r||Math.abs(K.startY-Q)>=r))&&(He||(He=be?2:1),be||(K.isDragging=!0),ie(_e,ee))}},ge=K.onPress=function(oe){C(oe,1)||oe&&oe.button||(K.axis=lt=null,Ae.pause(),K.isPressed=!0,oe=nc(oe),tt=jt=0,K.startX=K.x=oe.clientX,K.startY=K.y=oe.clientY,K._vx.reset(),K._vy.reset(),$n(te?a:Ge,ji[1],ce,Mt,!0),K.deltaX=K.deltaY=0,A&&A(K))},H=K.onRelease=function(oe){if(!C(oe,1)){Jn(te?a:Ge,ji[1],ce,!0);var pe=!isNaN(K.y-K.startY),se=K.isDragging,Q=se&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),_e=nc(oe);!Q&&pe&&(K._vx.reset(),K._vy.reset(),u&&we&&En.delayedCall(.08,function(){if(sc()-Le>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(Ge.createEvent){var ee=Ge.createEvent("MouseEvents");ee.initMouseEvent("click",!0,!0,Ti,1,_e.screenX,_e.screenY,_e.clientX,_e.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(ee)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,h&&se&&!te&&Ae.restart(!0),He&&V(),g&&se&&g(K),v&&v(K,Q)}},j=function(pe){return pe.touches&&pe.touches.length>1&&(K.isGesturing=!0)&&q(pe,K.isDragging)},le=function(){return(K.isGesturing=!1)||P(K)},N=function(pe){if(!C(pe)){var se=ot(),Q=Ht();re((se-Zt)*ue,(Q-U)*ue,1),Zt=se,U=Q,h&&Ae.restart(!0)}},$=function(pe){if(!C(pe)){pe=nc(pe,u),ne&&(Ue=!0);var se=(pe.deltaMode===1?l:pe.deltaMode===2?Ti.innerHeight:1)*p;re(pe.deltaX*se,pe.deltaY*se,0),h&&!te&&Ae.restart(!0)}},J=function(pe){if(!C(pe)){var se=pe.clientX,Q=pe.clientY,_e=se-K.x,ee=Q-K.y;K.x=se,K.y=Q,Ie=!0,h&&Ae.restart(!0),(_e||ee)&&ie(_e,ee)}},fe=function(pe){K.event=pe,I(K)},ae=function(pe){K.event=pe,k(K)},de=function(pe){return C(pe)||nc(pe,u)&&Z(K)};Ae=K._dc=En.delayedCall(f||.25,M).pause(),K.deltaX=K.deltaY=0,K._vx=zh(0,50,!0),K._vy=zh(0,50,!0),K.scrollX=ot,K.scrollY=Ht,K.isDragging=K.isGesturing=K.isPressed=!1,mx(this),K.enable=function(oe){return K.isEnabled||($n(ct?Ge:a,"scroll",hm),o.indexOf("scroll")>=0&&$n(ct?Ge:a,"scroll",N,Mt,ve),o.indexOf("wheel")>=0&&$n(a,"wheel",$,Mt,ve),(o.indexOf("touch")>=0&&dx||o.indexOf("pointer")>=0)&&($n(a,ji[0],ge,Mt,ve),$n(Ge,ji[2],H),$n(Ge,ji[3],H),we&&$n(a,"click",ke,!0,!0),Z&&$n(a,"click",de),q&&$n(Ge,"gesturestart",j),P&&$n(Ge,"gestureend",le),I&&$n(a,_o+"enter",fe),k&&$n(a,_o+"leave",ae),W&&$n(a,_o+"move",J)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=Ie=He=!1,K._vx.reset(),K._vy.reset(),Zt=ot(),U=Ht(),oe&&oe.type&&ge(oe),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(La.filter(function(oe){return oe!==K&&rc(oe.target)}).length||Jn(ct?Ge:a,"scroll",hm),K.isPressed&&(K._vx.reset(),K._vy.reset(),Jn(te?a:Ge,ji[1],ce,!0)),Jn(ct?Ge:a,"scroll",N,ve),Jn(a,"wheel",$,ve),Jn(a,ji[0],ge,ve),Jn(Ge,ji[2],H),Jn(Ge,ji[3],H),Jn(a,"click",ke,!0),Jn(a,"click",de),Jn(Ge,"gesturestart",j),Jn(Ge,"gestureend",le),Jn(a,_o+"enter",fe),Jn(a,_o+"leave",ae),Jn(a,_o+"move",J),K.isEnabled=K.isPressed=K.isDragging=!1,Be&&Be(K))},K.kill=K.revert=function(){K.disable();var oe=La.indexOf(K);oe>=0&&La.splice(oe,1),Ks===K&&(Ks=0)},La.push(K),te&&rc(a)&&(Ks=K),K.enable(_)},e1(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Kt.version="3.14.2";Kt.create=function(s){return new Kt(s)};Kt.register=yx;Kt.getAll=function(){return La.slice()};Kt.getById=function(s){return La.filter(function(e){return e.vars.id===s})[0]};gx()&&En.registerPlugin(Kt);var Ee,Ua,et,Pt,Ei,_t,Am,nf,yc,fc,ac,Gh,zn,of,ym,ei,vx,Sx,Fa,Fx,fm,Bx,Qn,vm,kx,zx,Cr,Sm,Em,Ba,Rm,dc,Mm,dm,Vh=1,Gn=Date.now,pm=Gn(),Vi=0,lc=0,Mx=function(e,t,n){var i=Ai(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},bx=function(e,t){return t&&(!Ai(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},s1=function s(){return lc&&requestAnimationFrame(s)},Tx=function(){return of=1},wx=function(){return of=0},_s=function(e){return e},cc=function(e){return Math.round(e*1e5)/1e5||0},Gx=function(){return typeof window<"u"},Vx=function(){return Ee||Gx()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},bo=function(e){return!!~Am.indexOf(e)},Hx=function(e){return(e==="Height"?Rm:et["inner"+e])||Ei["client"+e]||_t["client"+e]},Wx=function(e){return Js(e,"getBoundingClientRect")||(bo(e)?function(){return tf.width=et.innerWidth,tf.height=Rm,tf}:function(){return $s(e)})},r1=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Js(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Hx(r):e["client"+r])||0}},o1=function(e,t){return!t||~Qi.indexOf(e)?Wx(e):function(){return tf}},xs=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Js(e,n))?o()-Wx(e)()[r]:bo(e)?(Ei[n]||_t[n])-Hx(i):e[n]-e["offset"+i])},Hh=function(e,t){for(var n=0;n<Fa.length;n+=3)(!t||~t.indexOf(Fa[n+1]))&&e(Fa[n],Fa[n+1],Fa[n+2])},Ai=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},uc=function(e){return typeof e=="number"},xo=function(e){return typeof e=="object"},oc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},mm=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Na=Math.abs,Xx="left",qx="top",Cm="right",Pm="bottom",vo="width",So="height",pc="Right",mc="Left",gc="Top",_c="Bottom",on="padding",zi="margin",za="Width",Im="Height",_n="px",Gi=function(e){return et.getComputedStyle(e)},a1=function(e){var t=Gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ax=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$s=function(e,t){var n=t&&Gi(e)[ym]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},sf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Yx=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},l1=function(e){return function(t){return Ee.utils.snap(Yx(e),t)}},Lm=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},c1=function(e){return function(t,n){return Lm(Yx(e))(t,n.direction)}},Wh=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Sn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Xh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ex={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qh={toggleActions:"play",anticipatePin:0},rf={top:0,left:0,center:.5,bottom:1,right:1},$h=function(e,t){if(Ai(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in rf?rf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yh=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,p=Pt.createElement("div"),_=bo(n)||Js(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?_t:n,S=e.indexOf("start")!==-1,A=S?c:u,v="border-color:"+A+";font-size:"+h+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===rn?Cm:Pm)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],jh(p,0,i,S),p},jh=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+za]=1,r["border"+a+za]=0,r[n.p]=t+"px",Ee.set(e,r)},Qe=[],bm={},vc,Rx=function(){return Gn()-Vi>34&&(vc||(vc=requestAnimationFrame(js)))},Oa=function(){(!Qn||!Qn.isPressed||Qn.startX>_t.clientWidth)&&(je.cache++,Qn?vc||(vc=requestAnimationFrame(js)):js(),Vi||wo("scrollStart"),Vi=Gn())},gm=function(){zx=et.innerWidth,kx=et.innerHeight},hc=function(e){je.cache++,(e===!0||!zn&&!Bx&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!vm||zx!==et.innerWidth||Math.abs(et.innerHeight-kx)>et.innerHeight*.25))&&nf.restart(!0)},To={},u1=[],Kx=function s(){return vn(Ze,"scrollEnd",s)||yo(!0)},wo=function(e){return To[e]&&To[e].map(function(t){return t()})||u1},wi=[],Zx=function(e){for(var t=0;t<wi.length;t+=5)(!e||wi[t+4]&&wi[t+4].query===e)&&(wi[t].style.cssText=wi[t+1],wi[t].getBBox&&wi[t].setAttribute("transform",wi[t+2]||""),wi[t+3].uncache=1)},Jx=function(){return je.forEach(function(e){return Vn(e)&&++e.cacheID&&(e.rec=e())})},Dm=function(e,t){var n;for(ei=0;ei<Qe.length;ei++)n=Qe[ei],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));dc=!0,t&&Zx(t),t||wo("revert")},$x=function(e,t){je.cache++,(t||!ti)&&je.forEach(function(n){return Vn(n)&&n.cacheID++&&(n.rec=0)}),Ai(e)&&(et.history.scrollRestoration=Em=e)},ti,Mo=0,Cx,h1=function(){if(Cx!==Mo){var e=Cx=Mo;requestAnimationFrame(function(){return e===Mo&&yo(!0)})}},jx=function(){_t.appendChild(Ba),Rm=!Qn&&Ba.offsetHeight||et.innerHeight,_t.removeChild(Ba)},Px=function(e){return yc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yo=function(e,t){if(Ei=Pt.documentElement,_t=Pt.body,Am=[et,Pt,Ei,_t],Vi&&!e&&!dc){Sn(Ze,"scrollEnd",Kx);return}jx(),ti=Ze.isRefreshing=!0,dc||Jx();var n=wo("refreshInit");Fx&&Ze.sort(),t||Dm(),je.forEach(function(i){Vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),dc=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Mm=1,Px(!0),Qe.forEach(function(i){var r=xs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Px(!1),Mm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){Vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$x(Em,1),nf.pause(),Mo++,ti=2,js(2),Qe.forEach(function(i){return Vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ti=Ze.isRefreshing=!1,wo("refresh")},Tm=0,Qh=1,xc,js=function(e){if(e===2||!ti&&!dc){Ze.isUpdating=!0,xc&&xc.update(0);var t=Qe.length,n=Gn(),i=n-pm>=50,r=t&&Qe[0].scroll();if(Qh=Tm>r?-1:1,ti||(Tm=r),i&&(Vi&&!of&&n-Vi>200&&(Vi=0,wo("scrollEnd")),ac=pm,pm=n),Qh<0){for(ei=t;ei-- >0;)Qe[ei]&&Qe[ei].update(0,i);Qh=1}else for(ei=0;ei<t;ei++)Qe[ei]&&Qe[ei].update(0,i);Ze.isUpdating=!1}vc=0},wm=[Xx,qx,Pm,Cm,zi+_c,zi+pc,zi+gc,zi+mc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ef=wm.concat([vo,So,"boxSizing","max"+za,"max"+Im,"position",zi,on,on+gc,on+pc,on+_c,on+mc]),f1=function(e,t,n){ka(n);var i=e._gsap;if(i.spacerIsNative)ka(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},_m=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=wm.length,o=t.style,a=e.style,l;r--;)l=wm[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pm]=a[Cm]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vo]=sf(e,kn)+_n,o[So]=sf(e,rn)+_n,o[on]=a[zi]=a[qx]=a[Xx]="0",ka(i),a[vo]=a["max"+za]=n[vo],a[So]=a["max"+Im]=n[So],a[on]=n[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},d1=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(d1,"-$1").toLowerCase())}},Kh=function(e){for(var t=ef.length,n=e.style,i=[],r=0;r<t;r++)i.push(ef[r],n[ef[r]]);return i.t=e,i},p1=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},tf={left:0,top:0},Ix=function(e,t,n,i,r,o,a,l,c,u,h,f,d,p){Vn(e)&&(e=e(l)),Ai(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?$h("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,S;if(d&&d.seek(0),isNaN(e)||(e=+e),uc(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&jh(a,n,i,!0);else{Vn(t)&&(t=t(l));var A=(e||"0").split(" "),v,T,b,x;S=jn(t,l)||_t,v=$s(S)||{},(!v||!v.left&&!v.top)&&Gi(S).display==="none"&&(x=S.style.display,S.style.display="block",v=$s(S),x?S.style.display=x:S.style.removeProperty("display")),T=$h(A[0],v[i.d]),b=$h(A[1]||"0",n),e=v[i.p]-c[i.p]-u+T+r-b,a&&jh(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var y=e+n,E=o._isStart;m="scroll"+i.d2,jh(o,y,i,E&&y>20||!E&&(h?Math.max(_t[m],Ei[m]):o.parentNode[m])<=y+1),h&&(c=$s(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+_n))}return d&&S&&(m=$s(S),d.seek(f),g=$s(S),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},m1=/(webkit|moz|length|cssText|inset)/i,Lx=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===_t){e._stOrig=r.cssText,a=Gi(e);for(o in a)!+o&&!m1.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Qx=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Zh=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Dx=function(e,t){var n=Zs(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||n();var _=Qx(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){je.cache++,o.tween&&js()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ee.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Sn(e,"wheel",n.wheelHandler),Ze.isTouch&&Sn(e,"touchmove",n.wheelHandler),r},Ze=(function(){function s(t,n){Ua||s.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sm(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!lc){this.update=this.refresh=this.kill=_s;return}n=Ax(Ai(n)||uc(n)||n.nodeType?{trigger:n}:n,qh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,S=r.onSnapComplete,A=r.once,v=r.snap,T=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,y=r.fastScrollEnd,E=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?kn:rn,D=!h&&h!==0,L=jn(n.scroller||et),B=Ee.core.getCache(L),I=bo(L),k=("pinType"in n?n.pinType:Js(L,"pinType")||I&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=D&&n.toggleActions.split(" "),te="markers"in n?n.markers:qh.markers,q=I?0:parseFloat(Gi(L)["border"+R.p2+za])||0,P=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Se=r1(L,I,R),Be=o1(L,I),Z=0,ue=0,ve=0,we=Zs(L,R),me,De,xt,Ae,He,Ie,Ue,ht,lt,K,tt,jt,Mt,ot,Ht,Zt,U,dt,ct,Ge,he,ft,Le,ke,C,M,V,re,ie,ce,ge,H,j,le,N,$,J,fe,ae;if(P._startClamp=P._endClamp=!1,P._dir=R,m*=45,P.scroller=L,P.scroll=x?x.time.bind(x):we,Ae=we(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Fx=1,n.refreshPriority===-9999&&(xc=P)),B.tweenScroll=B.tweenScroll||{top:Dx(L,rn),left:Dx(L,kn)},P.tweenTo=me=B.tweenScroll[R.p],P.scrubDuration=function(Q){j=uc(Q)&&Q,j?H?H.duration(Q):H=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(P)}}):(H&&H.progress(1).kill(),H=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ce=0,l||(l=i.vars.id)),v&&((!xo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _t.style&&Ee.set(I?[_t,Ei]:L,{scrollBehavior:"auto"}),je.forEach(function(Q){return Vn(Q)&&Q.target===(I?Pt.scrollingElement||Ei:L)&&(Q.smooth=!1)}),xt=Vn(v.snapTo)?v.snapTo:v.snapTo==="labels"?l1(i):v.snapTo==="labelsDirectional"?c1(i):v.directional!==!1?function(Q,_e){return Lm(v.snapTo)(Q,Gn()-ue<500?0:_e.direction)}:Ee.utils.snap(v.snapTo),le=v.duration||{min:.1,max:2},le=xo(le)?fc(le.min,le.max):fc(le,le),N=Ee.delayedCall(v.delay||j/2||.1,function(){var Q=we(),_e=Gn()-ue<500,ee=me.tween;if((_e||Math.abs(P.getVelocity())<10)&&!ee&&!of&&Z!==Q){var be=(Q-Ie)/ot,nt=i&&!D?i.totalProgress():be,We=_e?0:(nt-ge)/(Gn()-ac)*1e3||0,Lt=Ee.utils.clamp(-be,1-be,Na(We/2)*We/.185),Qt=be+(v.inertia===!1?0:Lt),Dt,bt,mt=v,an=mt.onStart,Tt=mt.onInterrupt,Cn=mt.onComplete;if(Dt=xt(Qt,P),uc(Dt)||(Dt=Qt),bt=Math.max(0,Math.round(Ie+Dt*ot)),Q<=Ue&&Q>=Ie&&bt!==Q){if(ee&&!ee._initted&&ee.data<=Na(bt-Q))return;v.inertia===!1&&(Lt=Dt-be),me(bt,{duration:le(Na(Math.max(Na(Qt-nt),Na(Dt-nt))*.185/We/.05||0)),ease:v.ease||"power3",data:Na(bt-Q),onInterrupt:function(){return N.restart(!0)&&Tt&&Tt(P)},onComplete:function(){P.update(),Z=we(),i&&!D&&(H?H.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),ce=ge=i&&!D?i.totalProgress():P.progress,S&&S(P),Cn&&Cn(P)}},Q,Lt*ot,bt-Q-Lt*ot),an&&an(P,me.tween)}}else P.isActive&&Z!==Q&&N.restart(!0)}).pause()),l&&(bm[l]=P),f=P.trigger=jn(f||d!==!0&&d),ae=f&&f._gsap&&f._gsap.stRevert,ae&&(ae=ae(P)),d=d===!0?f:jn(d),Ai(a)&&(a={targets:f,className:a}),d&&(p===!1||p===zi||(p=!p&&d.parentNode&&d.parentNode.style&&Gi(d.parentNode).display==="flex"?!1:on),P.pin=d,De=Ee.core.getCache(d),De.spacer?Ht=De.pinState:(b&&(b=jn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),De.spacerIsNative=!!b,b&&(De.spacerState=Kh(b))),De.spacer=dt=b||Pt.createElement("div"),dt.classList.add("pin-spacer"),l&&dt.classList.add("pin-spacer-"+l),De.pinState=Ht=Kh(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),P.spacer=dt=De.spacer,ie=Gi(d),ke=ie[p+R.os2],Ge=Ee.getProperty(d),he=Ee.quickSetter(d,R.a,_n),_m(d,dt,ie),U=Kh(d)),te){jt=xo(te)?Ax(te,Ex):Ex,K=Yh("scroller-start",l,L,R,jt,0),tt=Yh("scroller-end",l,L,R,jt,0,K),ct=K["offset"+R.op.d2];var de=jn(Js(L,"content")||L);ht=this.markerStart=Yh("start",l,de,R,jt,ct,0,x),lt=this.markerEnd=Yh("end",l,de,R,jt,ct,0,x),x&&(fe=Ee.quickSetter([ht,lt],R.a,_n)),!k&&!(Qi.length&&Js(L,"fixedMarkers")===!0)&&(a1(I?_t:L),Ee.set([K,tt],{force3D:!0}),M=Ee.quickSetter(K,R.a,_n),re=Ee.quickSetter(tt,R.a,_n))}if(x){var oe=x.vars.onUpdate,pe=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){P.update(0,0,1),oe&&oe.apply(x,pe||[])})}if(P.previous=function(){return Qe[Qe.indexOf(P)-1]},P.next=function(){return Qe[Qe.indexOf(P)+1]},P.revert=function(Q,_e){if(!_e)return P.kill(!0);var ee=Q!==!1||!P.enabled,be=zn;ee!==P.isReverted&&(ee&&($=Math.max(we(),P.scroll.rec||0),ve=P.progress,J=i&&i.progress()),ht&&[ht,lt,K,tt].forEach(function(nt){return nt.style.display=ee?"none":"block"}),ee&&(zn=P,P.update(ee)),d&&(!T||!P.isActive)&&(ee?f1(d,dt,Ht):_m(d,dt,Gi(d),C)),ee||P.update(ee),zn=be,P.isReverted=ee)},P.refresh=function(Q,_e,ee,be){if(!((zn||!P.enabled)&&!_e)){if(d&&Q&&Vi){Sn(s,"scrollEnd",Kx);return}!ti&&ne&&ne(P),zn=P,me.tween&&!ee&&(me.tween.kill(),me.tween=0),H&&H.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(z){return z.vars.immediateRender&&z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var nt=Se(),We=Be(),Lt=x?x.duration():xs(L,R),Qt=ot<=.01||!ot,Dt=0,bt=be||0,mt=xo(ee)?ee.end:n.end,an=n.endTrigger||f,Tt=xo(ee)?ee.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Cn=P.pinnedContainer=n.pinnedContainer&&jn(n.pinnedContainer,P),di=f&&Math.max(0,Qe.indexOf(P))||0,Wt=di,en,ln,pi,Io,cn,Xt,Ci,Wa,Mc,nr,w,O,Y;for(te&&xo(ee)&&(O=Ee.getProperty(K,R.p),Y=Ee.getProperty(tt,R.p));Wt-- >0;)Xt=Qe[Wt],Xt.end||Xt.refresh(0,1)||(zn=P),Ci=Xt.pin,Ci&&(Ci===f||Ci===d||Ci===Cn)&&!Xt.isReverted&&(nr||(nr=[]),nr.unshift(Xt),Xt.revert(!0,!0)),Xt!==Qe[Wt]&&(di--,Wt--);for(Vn(Tt)&&(Tt=Tt(P)),Tt=Mx(Tt,"start",P),Ie=Ix(Tt,f,nt,R,we(),ht,K,P,We,q,k,Lt,x,P._startClamp&&"_startClamp")||(d?-.001:0),Vn(mt)&&(mt=mt(P)),Ai(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Ai(Tt)?Tt.split(" ")[0]:"")+mt:(Dt=$h(mt.substr(2),nt),mt=Ai(Tt)?Tt:(x?Ee.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Ie):Ie)+Dt,an=f)),mt=Mx(mt,"end",P),Ue=Math.max(Ie,Ix(mt||(an?"100% 0":Lt),an,nt,R,we()+Dt,lt,tt,P,We,q,k,Lt,x,P._endClamp&&"_endClamp"))||-.001,Dt=0,Wt=di;Wt--;)Xt=Qe[Wt]||{},Ci=Xt.pin,Ci&&Xt.start-Xt._pinPush<=Ie&&!x&&Xt.end>0&&(en=Xt.end-(P._startClamp?Math.max(0,Xt.start):Xt.start),(Ci===f&&Xt.start-Xt._pinPush<Ie||Ci===Cn)&&isNaN(Tt)&&(Dt+=en*(1-Xt.progress)),Ci===d&&(bt+=en));if(Ie+=Dt,Ue+=Dt,P._startClamp&&(P._startClamp+=Dt),P._endClamp&&!ti&&(P._endClamp=Ue||-.001,Ue=Math.min(Ue,xs(L,R))),ot=Ue-Ie||(Ie-=.01)&&.001,Qt&&(ve=Ee.utils.clamp(0,1,Ee.utils.normalize(Ie,Ue,$))),P._pinPush=bt,ht&&Dt&&(en={},en[R.a]="+="+Dt,Cn&&(en[R.p]="-="+we()),Ee.set([ht,lt],en)),d&&!(Mm&&P.end>=xs(L,R)))en=Gi(d),Io=R===rn,pi=we(),ft=parseFloat(Ge(R.a))+bt,!Lt&&Ue>1&&(w=(I?Pt.scrollingElement||Ei:L).style,w={style:w,value:w["overflow"+R.a.toUpperCase()]},I&&Gi(_t)["overflow"+R.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+R.a.toUpperCase()]="scroll")),_m(d,dt,en),U=Kh(d),ln=$s(d,!0),Wa=k&&Zs(L,Io?kn:rn)(),p?(C=[p+R.os2,ot+bt+_n],C.t=dt,Wt=p===on?sf(d,R)+ot+bt:0,Wt&&(C.push(R.d,Wt+_n),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Wt+_n)),ka(C),Cn&&Qe.forEach(function(z){z.pin===Cn&&z.vars.pinSpacing!==!1&&(z._subPinOffset=!0)}),k&&we($)):(Wt=sf(d,R),Wt&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Wt+_n)),k&&(cn={top:ln.top+(Io?pi-Ie:Wa)+_n,left:ln.left+(Io?Wa:pi-Ie)+_n,boxSizing:"border-box",position:"fixed"},cn[vo]=cn["max"+za]=Math.ceil(ln.width)+_n,cn[So]=cn["max"+Im]=Math.ceil(ln.height)+_n,cn[zi]=cn[zi+gc]=cn[zi+pc]=cn[zi+_c]=cn[zi+mc]="0",cn[on]=en[on],cn[on+gc]=en[on+gc],cn[on+pc]=en[on+pc],cn[on+_c]=en[on+_c],cn[on+mc]=en[on+mc],Zt=p1(Ht,cn,T),ti&&we(0)),i?(Mc=i._initted,fm(1),i.render(i.duration(),!0,!0),Le=Ge(R.a)-ft+ot+bt,V=Math.abs(ot-Le)>1,k&&V&&Zt.splice(Zt.length-2,2),i.render(0,!0,!0),Mc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fm(0)):Le=ot,w&&(w.value?w.style["overflow"+R.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+R.a));else if(f&&we()&&!x)for(ln=f.parentNode;ln&&ln!==_t;)ln._pinOffset&&(Ie-=ln._pinOffset,Ue-=ln._pinOffset),ln=ln.parentNode;nr&&nr.forEach(function(z){return z.revert(!1,!0)}),P.start=Ie,P.end=Ue,Ae=He=ti?$:we(),!x&&!ti&&(Ae<$&&we($),P.scroll.rec=0),P.revert(!1,!0),ue=Gn(),N&&(Z=-1,N.restart(!0)),zn=0,i&&D&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Qt||ve!==P.progress||x||_||i&&!i._initted)&&(i&&!D&&(i._initted||ve||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Ie<-.001&&!ve?Ee.utils.normalize(Ie,Ue,0):ve,!0),P.progress=Qt||(Ae-Ie)/ot===ve?0:ve),d&&p&&(dt._pinOffset=Math.round(P.progress*Le)),H&&H.invalidate(),isNaN(O)||(O-=Ee.getProperty(K,R.p),Y-=Ee.getProperty(tt,R.p),Zh(K,R,O),Zh(ht,R,O-(be||0)),Zh(tt,R,Y),Zh(lt,R,Y-(be||0))),Qt&&!ti&&P.update(),u&&!ti&&!Mt&&(Mt=!0,u(P),Mt=!1)}},P.getVelocity=function(){return(we()-He)/(Gn()-ac)*1e3||0},P.endAnimation=function(){oc(P.callbackAnimation),i&&(H?H.progress(1):i.paused()?D||oc(i,P.direction<0,1):oc(i,i.reversed()))},P.labelToScroll=function(Q){return i&&i.labels&&(Ie||P.refresh()||Ie)+i.labels[Q]/i.duration()*ot||0},P.getTrailing=function(Q){var _e=Qe.indexOf(P),ee=P.direction>0?Qe.slice(0,_e).reverse():Qe.slice(_e+1);return(Ai(Q)?ee.filter(function(be){return be.vars.preventOverlaps===Q}):ee).filter(function(be){return P.direction>0?be.end<=Ie:be.start>=Ue})},P.update=function(Q,_e,ee){if(!(x&&!ee&&!Q)){var be=ti===!0?$:P.scroll(),nt=Q?0:(be-Ie)/ot,We=nt<0?0:nt>1?1:nt||0,Lt=P.progress,Qt,Dt,bt,mt,an,Tt,Cn,di;if(_e&&(He=Ae,Ae=x?we():be,v&&(ge=ce,ce=i&&!D?i.totalProgress():We)),m&&d&&!zn&&!Vh&&Vi&&(!We&&Ie<be+(be-He)/(Gn()-ac)*m?We=1e-4:We===1&&Ue>be+(be-He)/(Gn()-ac)*m&&(We=.9999)),We!==Lt&&P.enabled){if(Qt=P.isActive=!!We&&We<1,Dt=!!Lt&&Lt<1,Tt=Qt!==Dt,an=Tt||!!We!=!!Lt,P.direction=We>Lt?1:-1,P.progress=We,an&&!zn&&(bt=We&&!Lt?0:We===1?1:Lt===1?2:3,D&&(mt=!Tt&&F[bt+1]!=="none"&&F[bt+1]||F[bt],di=i&&(mt==="complete"||mt==="reset"||mt in i))),E&&(Tt||di)&&(di||h||!i)&&(Vn(E)?E(P):P.getTrailing(E).forEach(function(pi){return pi.endAnimation()})),D||(H&&!zn&&!Vh?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",We,i._tTime/i._tDur):(H.vars.totalProgress=We,H.invalidate().restart())):i&&i.totalProgress(We,!!(zn&&(ue||Q)))),d){if(Q&&p&&(dt.style[p+R.os2]=ke),!k)he(cc(ft+Le*We));else if(an){if(Cn=!Q&&We>Lt&&Ue+1>be&&be+1>=xs(L,R),T)if(!Q&&(Qt||Cn)){var Wt=$s(d,!0),en=be-Ie;Lx(d,_t,Wt.top+(R===rn?en:0)+_n,Wt.left+(R===rn?0:en)+_n)}else Lx(d,dt);ka(Qt||Cn?Zt:U),V&&We<1&&Qt||he(ft+(We===1&&!Cn?Le:0))}}v&&!me.tween&&!zn&&!Vh&&N.restart(!0),a&&(Tt||A&&We&&(We<1||!dm))&&yc(a.targets).forEach(function(pi){return pi.classList[Qt||A?"add":"remove"](a.className)}),o&&!D&&!Q&&o(P),an&&!zn?(D&&(di&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(P)),(Tt||!dm)&&(c&&Tt&&mm(P,c),W[bt]&&mm(P,W[bt]),A&&(We===1?P.kill(!1,1):W[bt]=0),Tt||(bt=We===1?1:3,W[bt]&&mm(P,W[bt]))),y&&!Qt&&Math.abs(P.getVelocity())>(uc(y)?y:2500)&&(oc(P.callbackAnimation),H?H.progress(1):oc(i,mt==="reverse"?1:!We,1))):D&&o&&!zn&&o(P)}if(re){var ln=x?be/x.duration()*(x._caScrollDist||0):be;M(ln+(K._isFlipped?1:0)),re(ln)}fe&&fe(-be/x.duration()*(x._caScrollDist||0))}},P.enable=function(Q,_e){P.enabled||(P.enabled=!0,Sn(L,"resize",hc),I||Sn(L,"scroll",Oa),ne&&Sn(s,"refreshInit",ne),Q!==!1&&(P.progress=ve=0,Ae=He=Z=we()),_e!==!1&&P.refresh())},P.getTween=function(Q){return Q&&me?me.tween:H},P.setPositions=function(Q,_e,ee,be){if(x){var nt=x.scrollTrigger,We=x.duration(),Lt=nt.end-nt.start;Q=nt.start+Lt*Q/We,_e=nt.start+Lt*_e/We}P.refresh(!1,!1,{start:bx(Q,ee&&!!P._startClamp),end:bx(_e,ee&&!!P._endClamp)},be),P.update()},P.adjustPinSpacing=function(Q){if(C&&Q){var _e=C.indexOf(R.d)+1;C[_e]=parseFloat(C[_e])+Q+_n,C[1]=parseFloat(C[1])+Q+_n,ka(C)}},P.disable=function(Q,_e){if(Q!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,_e||H&&H.pause(),$=0,De&&(De.uncache=1),ne&&vn(s,"refreshInit",ne),N&&(N.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!I)){for(var ee=Qe.length;ee--;)if(Qe[ee].scroller===L&&Qe[ee]!==P)return;vn(L,"resize",hc),I||vn(L,"scroll",Oa)}},P.kill=function(Q,_e){P.disable(Q,_e),H&&!_e&&H.kill(),l&&delete bm[l];var ee=Qe.indexOf(P);ee>=0&&Qe.splice(ee,1),ee===ei&&Qh>0&&ei--,ee=0,Qe.forEach(function(be){return be.scroller===P.scroller&&(ee=1)}),ee||ti||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Q&&i.revert({kill:!1}),_e||i.kill()),ht&&[ht,lt,K,tt].forEach(function(be){return be.parentNode&&be.parentNode.removeChild(be)}),xc===P&&(xc=0),d&&(De&&(De.uncache=1),ee=0,Qe.forEach(function(be){return be.pin===d&&ee++}),ee||(De.spacer=0)),n.onKill&&n.onKill(P)},Qe.push(P),P.enable(!1,!1),ae&&ae(P),i&&i.add&&!ot){var se=P.update;P.update=function(){P.update=se,je.cache++,Ie||Ue||P.refresh()},Ee.delayedCall(.01,P.update),ot=.01,Ie=Ue=0}else P.refresh();d&&h1()},s.register=function(n){return Ua||(Ee=n||Vx(),Gx()&&window.document&&s.enable(),Ua=lc),Ua},s.defaults=function(n){if(n)for(var i in n)qh[i]=n[i];return qh},s.disable=function(n,i){lc=0,Qe.forEach(function(o){return o[i?"kill":"disable"](n)}),vn(et,"wheel",Oa),vn(Pt,"scroll",Oa),clearInterval(Gh),vn(Pt,"touchcancel",_s),vn(_t,"touchstart",_s),Wh(vn,Pt,"pointerdown,touchstart,mousedown",Tx),Wh(vn,Pt,"pointerup,touchend,mouseup",wx),nf.kill(),Hh(vn);for(var r=0;r<je.length;r+=3)Xh(vn,je[r],je[r+1]),Xh(vn,je[r],je[r+2])},s.enable=function(){if(et=window,Pt=document,Ei=Pt.documentElement,_t=Pt.body,Ee&&(yc=Ee.utils.toArray,fc=Ee.utils.clamp,Sm=Ee.core.context||_s,fm=Ee.core.suppressOverwrites||_s,Em=et.history.scrollRestoration||"auto",Tm=et.pageYOffset||0,Ee.core.globals("ScrollTrigger",s),_t)){lc=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",jx(),s1(),Kt.register(Ee),s.isTouch=Kt.isTouch,Cr=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vm=Kt.isTouch===1,Sn(et,"wheel",Oa),Am=[et,Pt,Ei,_t],Ee.matchMedia?(s.matchMedia=function(c){var u=Ee.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ee.addEventListener("matchMediaInit",function(){Jx(),Dm()}),Ee.addEventListener("matchMediaRevert",function(){return Zx()}),Ee.addEventListener("matchMedia",function(){yo(0,1),wo("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return gm(),gm})):console.warn("Requires GSAP 3.11.0 or later"),gm(),Sn(Pt,"scroll",Oa);var n=_t.hasAttribute("style"),i=_t.style,r=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=$s(_t),rn.m=Math.round(a.top+rn.sc())||0,kn.m=Math.round(a.left+kn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),Gh=setInterval(Rx,250),Ee.delayedCall(.5,function(){return Vh=0}),Sn(Pt,"touchcancel",_s),Sn(_t,"touchstart",_s),Wh(Sn,Pt,"pointerdown,touchstart,mousedown",Tx),Wh(Sn,Pt,"pointerup,touchend,mouseup",wx),ym=Ee.utils.checkPrefix("transform"),ef.push(ym),Ua=Gn(),nf=Ee.delayedCall(.2,yo).pause(),Fa=[Pt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;Pt.hidden?(vx=c,Sx=u):(vx!==c||Sx!==u)&&hc()},Pt,"DOMContentLoaded",yo,et,"load",yo,et,"resize",hc],Hh(Sn),Qe.forEach(function(c){return c.enable(0,1)}),l=0;l<je.length;l+=3)Xh(vn,je[l],je[l+1]),Xh(vn,je[l],je[l+2])}},s.config=function(n){"limitCallbacks"in n&&(dm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Gh)||(Gh=i)&&setInterval(Rx,i),"ignoreMobileResize"in n&&(vm=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hh(vn)||Hh(Sn,n.autoRefreshEvents||"none"),Bx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=jn(n),o=je.indexOf(r),a=bo(r);~o&&je.splice(o,a?6:2),i&&(a?Qi.unshift(et,i,_t,i,Ei,i):Qi.unshift(r,i))},s.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Ai(n)?jn(n):n).getBoundingClientRect(),a=o[r?vo:So]*i||0;return r?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},s.positionInViewport=function(n,i,r){Ai(n)&&(n=jn(n));var o=n.getBoundingClientRect(),a=o[r?vo:So],l=i==null?a/2:i in rf?rf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},s.killAll=function(n){if(Qe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=To.killAll||[];To={},i.forEach(function(r){return r()})}},s})();Ze.version="3.14.2";Ze.saveStyles=function(s){return s?yc(s).forEach(function(e){if(e&&e.style){var t=wi.indexOf(e);t>=0&&wi.splice(t,5),wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Sm())}}):wi};Ze.revert=function(s,e){return Dm(!s,e)};Ze.create=function(s,e){return new Ze(s,e)};Ze.refresh=function(s){return s?hc(!0):(Ua||Ze.register())&&yo(!0)};Ze.update=function(s){return++je.cache&&js(s===!0?2:0)};Ze.clearScrollMemory=$x;Ze.maxScroll=function(s,e){return xs(s,e?kn:rn)};Ze.getScrollFunc=function(s,e){return Zs(jn(s),e?kn:rn)};Ze.getById=function(s){return bm[s]};Ze.getAll=function(){return Qe.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!Vi};Ze.snapDirectional=Lm;Ze.addEventListener=function(s,e){var t=To[s]||(To[s]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(s,e){var t=To[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ee.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(r)&&(r=r(),Sn(Ze,"refresh",function(){return r=e.batchMax()})),yc(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ze.create(c))}),t};var Nx=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},xm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===Ei&&s(_t,t)},Jh={auto:1,scroll:1},g1=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ee.core.getCache(r),a=Gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==_t&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Jh[(l=Gi(r)).overflowY]||Jh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!bo(r)&&(Jh[(l=Gi(r)).overflowY]||Jh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ey=function(e,t,n,i){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&g1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Sn(Pt,Kt.eventTypes[0],Ux,!1,!0)},onDisable:function(){return vn(Pt,Kt.eventTypes[0],Ux,!0)}})},_1=/(input|label|select|textarea)/i,Ox,Ux=function(e){var t=_1.test(e.target.tagName);(t||Ox)&&(e._gsapAllow=!0,Ox=t)},x1=function(e){xo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=jn(e.target)||Ei,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),f=Cr&&(e.content&&jn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Zs(c,rn),p=Zs(c,kn),_=1,m=(Kt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,g=0,S=Vn(i)?function(){return i(a)}:function(){return i||2.8},A,v,T=ey(c,e.type,!0,r),b=function(){return v=!1},x=_s,y=_s,E=function(){l=xs(c,rn),y=fc(Cr?1:0,l),n&&(x=fc(0,xs(c,kn))),A=Mo},R=function(){f._gsap.y=cc(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(b);var te=cc(a.deltaY/2),q=y(d.v-te);if(f&&q!==d.v+d.offset){d.offset=q-d.v;var P=cc((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=je.cache,js()}return!0}d.offset&&R(),v=!0},L,B,I,k,W=function(){E(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return Cr&&F.type==="touchmove"&&D(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){v=!1;var F=_;_=cc((et.visualViewport&&et.visualViewport.scale||1)/m),L.pause(),F!==_&&xm(c,_>1.01?!0:n?!1:"x"),B=p(),I=d(),E(),A=Mo},e.onRelease=e.onGestureStart=function(F,te){if(d.offset&&R(),!te)k.restart(!0);else{je.cache++;var q=S(),P,ne;n&&(P=p(),ne=P+q*.05*-F.velocityX/.227,q*=Nx(p,P,ne,xs(c,kn)),L.vars.scrollX=x(ne)),P=d(),ne=P+q*.05*-F.velocityY/.227,q*=Nx(d,P,ne,xs(c,rn)),L.vars.scrollY=y(ne),L.invalidate().duration(q).play(.01),(Cr&&L.vars.scrollY>=l||P>=l-1)&&Ee.to({},{onUpdate:W,duration:q})}o&&o(F)},e.onWheel=function(){L._ts&&L.pause(),Gn()-g>1e3&&(A=0,g=Gn())},e.onChange=function(F,te,q,P,ne){if(Mo!==A&&E(),te&&n&&p(x(P[2]===te?B+(F.startX-F.x):p()+te-P[1])),q){d.offset&&R();var Se=ne[2]===q,Be=Se?I+F.startY-F.y:d()+q-ne[1],Z=y(Be);Se&&Be!==Z&&(I+=Z-Be),d(Z)}(q||te)&&js()},e.onEnable=function(){xm(c,n?!1:"x"),Ze.addEventListener("refresh",W),Sn(et,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),T.enable()},e.onDisable=function(){xm(c,!0),vn(et,"resize",W),Ze.removeEventListener("refresh",W),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Kt(e),a.iOS=Cr,Cr&&!d()&&d(1),Cr&&Ee.ticker.add(_s),k=a._dc,L=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Qx(d,d(),function(){return L.pause()})},onUpdate:js,onComplete:k.vars.onComplete}),a};Ze.sort=function(s){if(Vn(s))return Qe.sort(s);var e=et.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Qe.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(s){return new Kt(s)};Ze.normalizeScroll=function(s){if(typeof s>"u")return Qn;if(s===!0&&Qn)return Qn.enable();if(s===!1){Qn&&Qn.kill(),Qn=s;return}var e=s instanceof Kt?s:x1(s);return Qn&&Qn.target===e.target&&Qn.kill(),bo(e.target)&&(Qn=e),e};Ze.core={_getVelocityProp:zh,_inputObserver:ey,_scrollers:je,_proxies:Qi,bridge:{ss:function(){Vi||wo("scrollStart"),Vi=Gn()},ref:function(){return zn}}};Vx()&&Ee.registerPlugin(Ze);tc.registerPlugin(Ze);var It=s=>document.querySelector(s),Po=s=>[...document.querySelectorAll(s)],ry=matchMedia("(prefers-reduced-motion: reduce)"),Ir=Po(".chapter"),lf=Ir.map(s=>s.id),Hi=[0,.155,.315,.465,.615,.785,.955],gf=[["weekenders","Weekenders","The everyday all-stars. A little chaotic, always up for an adventure, and better together."],["bakers","Bakers","Fresh out of the oven and ready for anything. The Bakers bring a generous helping of family spirit."],["sprinters","Sprinters","Always on the move. A sporty crew with a spring in their step and their eyes on the next big match."],["campbells","Campbells","The great outdoors is calling. Pack the essentials, bring the whole family and take the scenic route."],["sunnyfields","Sunnyfields","A little sunshine goes a long way. This cheerful crew brings countryside charm to the competition."],["rockwells","Rockwells","Turn up the family energy. Big personalities, good company and a little rock-and-roll spirit."],["nakamuras","Nakamuras","Helmets on. Family together. A fresh adventure is always just around the next corner."],["papadopoulos","Papadopoulos","A favourite cap and plenty of family spirit. This crew is ready to make a splash."],["okafors","Okafors","Colour, character and a whole lot of rhythm. Meet a family that brings its own unmistakable energy."]],y1=new gh,af=new Map,Um=0,ty=0,es=0,vt=ry.matches,tr=0,cf=0,Nm=0,ny=0,Ga=0,oy=-100,Fm=!1,vs,Rn,Ha,er,Ao,ff,Ro,Lr,Co,df={progress:0},ay=[],ly=[],cy=[];var uy=[],tP={sky:new Oe("#53bcf5"),fog:new Oe("#b7e6f5")},Ri=new Ct,iy=new G,nP=new G,iP=new G,v1=[["bakers",72,-1.9],["sprinters",109,1.9],["rockwells",166,-1.9],["nakamuras",218,1.9],["papadopoulos",279,-1.9],["okafors",316,1.9],["sunnyfields",356,-1.9],["campbells",403,1.9]].map(([s,e,t])=>({key:s,z:e,x:t,requested:!1})),S1=382,pf=5.8,M1=[0,0,1,1,0,-1,-1,0,0,1,0,-1,0,1,0],b1=new Ns({color:16777215}),T1=new Ns({color:2117068}),sP=new Ns({color:5679103}),mf=new fr(new Uint8Array([135,215,255]),3,1,ga);mf.minFilter=mf.magFilter=Bt;mf.needsUpdate=!0;function km(s=!0,e=16777215){return new Ns({color:e,vertexColors:s,gradientMap:mf})}function _f(s){return af.has(s)||af.set(s,y1.loadAsync(`/assets/fr3d/models/${s}.glb`).catch(e=>{throw af.delete(s),e})),af.get(s)}function zm(s){let e=mh(s.scene);return e.traverse(t=>{t.isMesh&&(t.material=km(!!t.geometry.attributes.color),t.frustumCulled=!1)}),e}function Pr(s,e){return-.0016*(e-16)*(e-16)-.0026*s*s}function fi(s){return s*pf+Math.floor(s/15)*4.4}function Va(s){return M1[(s%15+15)%15]*1.9*(Math.floor(s/15)%2?-1:1)}function hy(s){let e=Math.max(0,Math.floor(s/pf));for(;fi(e)>s;)e--;for(;fi(e+1)<=s;)e++;return Math.abs(fi(e+1)-s)<Math.abs(fi(e)-s)?e+1:e}var Sc=0,fy=-1e4;function dy(s,e=0,t=1){return Math.min(t,Math.max(e,s))}function Eo(s,e,t){return t=dy((t-s)/(e-s)),t*t*(3-2*t)}function w1(){Ir.forEach((e,t)=>{e.setAttribute("aria-hidden",t?"true":"false"),e.inert=t!==0}),Po('a[href^="#story-"]').forEach(e=>e.addEventListener("click",t=>{let n=lf.indexOf(e.hash.slice(1));n<0||(t.preventDefault(),sy(n))})),gf.forEach((e,t)=>{let n=document.createElement("button");n.type="button",n.textContent=e[1],n.setAttribute("aria-pressed",String(t===0)),n.addEventListener("click",()=>A1(t)),It(".family-choices").append(n)}),It("#motion-toggle").addEventListener("click",()=>{vt=!vt,Om()}),ry.addEventListener("change",e=>{vt=e.matches,Om()}),It("#boost-button").addEventListener("click",()=>{oy=Ga,It("#boost-status").textContent="That\u2019s the family energy! Keep the adventure moving.",vt||(tc.fromTo(".speed-lines",{opacity:0},{opacity:.7,duration:.2,yoyo:!0,repeat:1,repeatDelay:.8}),tc.fromTo(".world-shout",{scale:.8,opacity:.3},{scale:1.12,opacity:1,duration:.3,yoyo:!0,repeat:1,repeatDelay:.6})),ts()}),Po(".video-toggle").forEach(e=>{let t=e.parentElement.querySelector("video");e.addEventListener("click",()=>{t.paused?(t.dataset.userPaused="false",t.play().catch(()=>{})):(t.dataset.userPaused="true",t.pause())}),t.addEventListener("play",()=>{e.textContent="Pause video \u2161",e.setAttribute("aria-label","Pause gameplay video")}),t.addEventListener("pause",()=>{e.textContent="Play video \u25B7",e.setAttribute("aria-label","Play gameplay video")})});let s=Ze.create({trigger:"#journey",start:"top top",end:"bottom bottom",onUpdate:e=>{df.progress=e.progress,fy=performance.now(),uf(),ts()}});df.progress=s.progress,uf(),Om(),document.fonts.ready.then(()=>Ze.refresh()),addEventListener("resize",()=>{gy(),uf(),ts()},{passive:!0}),addEventListener("scroll",ts,{passive:!0}),document.addEventListener("visibilitychange",()=>{cf=0,document.hidden?(cancelAnimationFrame(tr),tr=0):ts()}),location.hash&&lf.includes(location.hash.slice(1))&&sy(lf.indexOf(location.hash.slice(1)),!0)}function sy(s,e=!1){let t=Hi[s]*(document.documentElement.scrollHeight-innerHeight);window.scrollTo({top:t,behavior:e||vt?"instant":"smooth"})}function uf(){let s=df.progress,e=0;if(Hi.forEach((i,r)=>{s>=i-.055&&(e=r)}),e!==es){es=e,Ir.forEach((r,o)=>{r.classList.toggle("active",o===es),r.setAttribute("aria-hidden",String(o!==es)),r.inert=o!==es}),It("#chapter-count").textContent=`${String(es+1).padStart(2,"0")} / 07`;let i=It("#next-stop");i.textContent=es===6?"BACK TO THE START \u2191":"KEEP GOING \u2193",i.href="#"+lf[es===6?0:es+1]}Ir[0].classList.toggle("active",es===0);for(let i=0;i<Ir.length;i++){let r=s-Hi[i],o=i===0?1:Eo(-.06,-.018,r),a=i===6?1:1-Eo(.075,.125,r),l=o*a;Ir[i].style.opacity=l,Ir[i].style.visibility=l>.001?"visible":"hidden",Ir[i].style.transform=vt?"none":`translate3d(0,${-r*220}px,0)`}It("#journey-percent").textContent=String(Math.round(s*100)).padStart(2,"0")+"%",It(".route-line i").style.transform=`scaleX(${s})`,It("#place-name").textContent=s<.17?"WELCOME TO SUNNY BEACH":s<.42?"NEXT STOP: THE SKI SLOPES":s<.69?"TAKE THE SCENIC ROUTE":"A LITTLE POOL PARTY ENERGY",Po(".story-video").forEach(i=>{Number(i.dataset.sceneVideo)===es&&!vt&&i.dataset.userPaused!=="true"?(i.getAttribute("src")||(i.src=i.dataset.src),i.paused&&i.play().catch(()=>{})):i.paused||i.pause()}),Po(".power-parade img").forEach((i,r)=>i.style.transform=vt?"none":`translate3d(0,${(s-Hi[2])*(-240-r*180)}px,0) rotate(${[-12,13,-6][r]+(s-Hi[2])*70}deg)`),Po(".giant-piece").forEach((i,r)=>i.style.transform=vt?"none":`translateY(${(s-Hi[1])*(r?420:-520)}px) rotate(${(r?-15:17)+(s-Hi[1])*100}deg)`);let t=It(".dad-footage");t.style.transform=vt?"none":`translateY(${(s-Hi[3])*-250}px) rotate(${4+(s-Hi[3])*16}deg)`;let n=It(".game-window");n.style.transform=`translate3d(0,${vt?0:(s-Hi[1])*-360}px,0) rotate(${vt?6:(innerWidth<700?4:8)+(s-Hi[1])*22}deg)`,It(".family-art").style.transform=`translateY(${vt?0:(s-Hi[4])*-180}px)`}function Om(){document.body.classList.toggle("motion-paused",vt),It("#motion-toggle").textContent=vt?"Resume motion":"Pause motion",It("#motion-toggle").setAttribute("aria-pressed",String(vt)),uf(),ts()}async function A1(s){Um=s;let[e,t,n]=gf[s];It("#family-title").textContent=t+".",It("#family-copy").textContent=n,It("#family-art").src=`/assets/fr3d/families/${e}.webp`,It("#family-art").alt="The "+t+" family",Po(".family-choices button").forEach((r,o)=>r.setAttribute("aria-pressed",String(s===o))),It("#family-status").textContent="Getting the "+t+" ready\u2026";let i=Fm?await my(e):!1;Um===s&&(It("#family-status").textContent=i?"The "+t+" are leading the way. Keep scrolling.":"Meet the "+t+". Keep scrolling.")}function E1(){let s=[],e=[],t=[],n=[[-100,-6.42,9095781],[-6.42,-4.12,16049852],[-4.12,-3.7,16449519],[-3.7,3.7,5267071],[3.7,4.12,16449519],[4.12,6.42,16049852],[6.42,100,9095781]];for(let[r,o,a]of n){let l=new Oe(a),c=s.length/3;for(let u=0;u<=100;u++){let h=30-u*1.9;for(let f of[r,o])s.push(f,Pr(f,h),h),e.push(l.r,l.g,l.b)}for(let u=0;u<100;u++){let h=c+u*2;t.push(h,h+1,h+2,h+1,h+3,h+2)}}let i=new dn;return i.setAttribute("position",new Ot(s,3)),i.setAttribute("color",new Ot(e,3)),i.setIndex(t),i.computeVertexNormals(),i}function R1(){let s=new Ls(new Yr(1.45,1.45,.78,40),T1,30),e=new Ls(new Yr(1.45,1.45,.17,40),b1,30);return s.instanceMatrix.setUsage(Ul),e.instanceMatrix.setUsage(Ul),s.frustumCulled=e.frustumCulled=!1,Rn.add(s,e),{side:s,top:e}}var ys,hf=[];function C1(){for(let s=0;s<30;s++){let e=document.createElement("canvas");e.width=128,e.height=64;let t=new ra(e);t.colorSpace=Nt;let n=new Jt(new pr(1.35,.675),new ii({map:t,transparent:!0,depthWrite:!1}));Rn.add(n),hf.push({root:n,c:e,map:t,index:-1})}}function P1(s){let e=[];return s.scene.updateMatrixWorld(!0),s.scene.traverse(t=>{if(!t.isMesh)return;let n=t.geometry.clone().applyMatrix4(t.matrixWorld);n.index&&(n=n.toNonIndexed());for(let i of Object.keys(n.attributes))["position","normal","color"].includes(i)||n.deleteAttribute(i);if(!n.attributes.color){let i=new Float32Array(n.attributes.position.count*3);i.fill(1),n.setAttribute("color",new sn(i,3))}n.attributes.normal||n.computeVertexNormals(),e.push(n)}),$_(e)}async function Qs(s,e,t){let n=await _f("prop-"+s),i=P1(n);i.computeBoundingBox();let r=i.boundingBox,o=r.max.y-r.min.y,a=(r.max.x+r.min.x)/2;i.translate(-a,-r.min.y,-(r.max.z+r.min.z)/2),i.scale(t/o,t/o,t/o);let l=new Ls(i,km(),e.length);l.instanceMatrix.setUsage(Ul),l.frustumCulled=!1,Rn.add(l),ly.push({mesh:l,entries:e})}async function I1(){let s=(t,n,i=0,r=0)=>Array.from({length:Math.ceil(520/t)},(o,a)=>({x:n,z:a*t-35+i,rot:r})),e=[];for(let t of[-1,1]){e.push(Qs("tree",s(12,t*6.4,t<0?0:5),5.3)),e.push(Qs("lamppost",s(21,t*4.7,5,t>0?-Math.PI/2:Math.PI/2),4.6)),e.push(Qs("fence",s(5.1,t*7.3,0,0),1.3)),e.push(Qs("bench",s(40,t*5.2,12,t>0?-Math.PI/2:Math.PI/2),1.5));for(let n=0;n<3;n++)e.push(Qs("house-"+["a","b","c"][n],s(48,t*13.3,n*16,t>0?-Math.PI/2:Math.PI/2),7.3+n*.5))}e.push(Qs("palm",s(33,10.5,10),7),Qs("pine",s(31,-11.4,17),7),Qs("deckchair",[{x:6,z:50,rot:-.4},{x:6,z:65,rot:.3},{x:-6,z:355,rot:1}],1.4),Qs("snowman",[{x:6,z:125,rot:0},{x:-6,z:140,rot:0},{x:6,z:155,rot:0}],2.8)),await Promise.allSettled(e)}function py(s,e="#fff",t="#173970"){let n=document.createElement("canvas");n.width=1024,n.height=180;let i=n.getContext("2d");i.fillStyle=t,i.beginPath(),i.roundRect(0,0,1024,180,35),i.fill(),i.textAlign="center",i.textBaseline="middle",i.font="95px Lilita, Arial",i.fillStyle=e,i.fillText(s,512,94,920);let r=new ra(n);return r.colorSpace=Nt,new Jt(new pr(7,1.23),new ii({map:r,transparent:!0,side:ri}))}async function L1(){for(let[s,e,t]of[["beach",48,"SUNNY BEACH"],["ski",140,"SKI SLOPES"],["camping",250,"CAMPING TRIP"],["pool",346,"POOL PARTY"]])try{let n=zm(await _f("arch-"+s)),i=new On().setFromObject(n),r=i.getSize(new G);n.scale.setScalar(14/r.x);let o=new On().setFromObject(n);n.position.y=-o.min.y;let a=new _i;a.add(n);let l=py(t);l.position.set(0,8.3,1),a.add(l),a.scale.setScalar(.75);let c=[];a.traverse(u=>{if(u.isMesh){let h={value:0};c.push(h),u.material.onBeforeCompile=f=>{f.uniforms.uHoles=h,f.fragmentShader=`uniform float uHoles;
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if(uHoles>0.0){vec2 grid=fract(gl_FragCoord.xy/5.0)-.5;float radius=uHoles<.9?sqrt(uHoles/3.14159):mix(.5352,.71,clamp((uHoles-.9)/.1,0.0,1.0));if(length(grid)<radius)discard;}`)},u.material.customProgramCacheKey=()=>"lowfilm1"}}),Rn.add(a),cy.push({root:a,z:e,films:c})}catch(n){console.warn("Arch unavailable",s,n)}}async function D1(s,e,t){try{let n=await _f("dad-"+s),i=zm(n);i.scale.setScalar(3.1);let r=new ua(i);r.clipAction(Di.findByName(n.animations,"Idle")).play(),Rn.add(i);let o=py(gf.find(l=>l[0]===s)[1].toUpperCase());o.scale.setScalar(.53),Rn.add(o);let a=hy(e);ay.push({root:i,m:r,z:fi(a),x:Va(a),label:o})}catch{console.warn("Rival unavailable",s)}}async function my(s){let e=++ty;try{let t=await _f("dad-"+s);if(e!==ty)return;let n=zm(t);n.scale.setScalar(3.4),er&&(Ao?.stopAllAction(),er.traverse(r=>{r.isMesh&&(r.material.dispose(),r.skeleton?.dispose())}),Rn.remove(er)),er=n,Ao=new ua(n),ff=Ao.clipAction(Di.findByName(t.animations,"Idle")),Ro=Ao.clipAction(Di.findByName(t.animations,"Hop"));let i=Di.findByName(t.animations,"Wave");return Lr=i?Ao.clipAction(i):null,ff.play(),Ro.play(),Ro.setEffectiveWeight(0),Lr&&(Lr.play(),Lr.setEffectiveWeight(0)),Rn.add(n),ts(),!0}catch(t){return console.warn("Dad model unavailable",t),!1}}function N1(){let s=new Yr(.37,.37,.12,16);s.rotateX(Math.PI/2);let e=new Ns({color:16767791});for(let t=0;t<38;t++){let n=new Jt(s,e);Rn.add(n),uy.push({root:n,z:28+t*9.8,x:(t%3-1)*1.5,phase:t*.7})}}function gy(){vs&&(vs.setSize(innerWidth,innerHeight),vs.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.25:1.6)),Ha.aspect=innerWidth/innerHeight,Ha.updateProjectionMatrix())}function ts(){!tr&&!document.hidden&&(tr=requestAnimationFrame(Bm))}function Bm(s){if(tr=0,!vs||document.hidden)return;if(!vt&&s-cf<1e3/(innerWidth<700?30:45)){tr=requestAnimationFrame(Bm);return}let e=Math.min((s-cf)/1e3||0,.04);cf=s,Ga+=e;let t=df.progress,n=t*S1,i=vt||s-fy>150?fi(hy(n)):n;Sc=vt?i:Vs.damp(Sc,i,9,e),Math.abs(Sc-i)<.001&&(Sc=i);let r=Sc;for(let y of v1)!y.requested&&y.z-r<130&&(y.requested=!0,D1(y.key,y.z,y.x));let o=r-ny;ny=r,Nm=Vs.lerp(Nm,e?Math.abs(o)/e:0,.12);let a=Nm>1&&!vt,l=vt?0:Math.max(0,1-(Ga-oy)/1.8),c=Math.floor(r/pf);for(;fi(c)>r;)c--;for(;fi(c+1)<=r;)c++;let u=dy((r-fi(c))/(fi(c+1)-fi(c))),h=u*u*(3-2*u),f=Vs.lerp(Va(c),Va(c+1),h),d=vt?0:Math.sin(u*Math.PI)*1.4,p=Eo(.91,.99,t),_=f*.35,m=Math.sqrt(12/.0016),S=Math.atan(2*.0016*m)+Math.atan((.5-.3)*2*Math.tan(Vs.degToRad(56)/2)),A=3.8;Ha.position.set(_,A,16);let v=12/Math.tan(S),T=Math.atan(A/v);if(iy.set(_,A-Math.tan(T)*100,-84),Ha.lookAt(iy),er){er.position.set(f,Pr(f,0)+.9+d+l*Math.sin(Ga*9)*.15,0);let y=a?Math.PI-Math.atan2(Va(c+1)-Va(c),fi(c+1)-fi(c)):.489;er.rotation.y+=Math.atan2(Math.sin(y-er.rotation.y),Math.cos(y-er.rotation.y))*(vt?1:Math.min(1,e*10));let E=a?.95:0;Ro.setEffectiveWeight(E),ff.setEffectiveWeight(p>.7&&Lr?0:1-E),Lr&&Lr.setEffectiveWeight(p>.7?1:0),vt?(ff.setEffectiveWeight(1),Ro.setEffectiveWeight(0),Lr?.setEffectiveWeight(0),Ao.setTime(3)):(a&&(Ro.time=u*Ro.getClip().duration),Ao.update(a?0:e))}let b=0;for(let y=Math.max(0,c-6);y<c+25;y++){let E=fi(y)-r;if(E<-25||E>135)continue;let R=Va(y),D=Pr(R,-E);Ri.position.set(R,D+.39,-E),Ri.rotation.set(0,0,0),Ri.scale.set(1,1,1),Ri.updateMatrix(),ys.side.setMatrixAt(b,Ri.matrix),Ri.position.y=D+.86,Ri.updateMatrix(),ys.top.setMatrixAt(b,Ri.matrix),ys.top.setColorAt(b,new Oe(y<c?6531839:16766769));let L=hf[b];if(L.index!==y){let B=L.c.getContext("2d");B.clearRect(0,0,128,64),B.font="52px Lilita,Arial",B.fillStyle="#ffffff",B.textAlign="center",B.textBaseline="middle",B.fillText(String(y+1),64,36),L.map.needsUpdate=!0,L.index=y}L.root.visible=!0,L.root.position.set(R,D+.39,-E+1.46),b++}for(let y=b;y<hf.length;y++)hf[y].root.visible=!1;ys.side.count=ys.top.count=b,ys.side.instanceMatrix.needsUpdate=ys.top.instanceMatrix.needsUpdate=!0,ys.top.instanceColor&&(ys.top.instanceColor.needsUpdate=!0);for(let y of ly){let E=0;for(let R of y.entries){let D=R.z-r;D<-30||D>135||(Ri.position.set(R.x,Pr(R.x,-D),-D),Ri.rotation.set(Math.atan(-.0032*(-D-16)),R.rot||0,0),Ri.scale.set(1,1,1),Ri.updateMatrix(),y.mesh.setMatrixAt(E++,Ri.matrix))}y.mesh.count=E,y.mesh.instanceMatrix.needsUpdate=!0}for(let y of cy){let E=y.z-r,R=E+16;y.root.visible=R>1&&E<135;let D=.9*(1-Eo(5,18,R))+.1*(1-Eo(2,5,R));y.films.forEach(L=>L.value=D),y.root.visible&&(y.root.position.set(0,Pr(0,-E),-E),y.root.rotation.x=Math.atan(-.0032*(-E-16)))}for(let y of ay){let E=y.z-r;y.root.visible=y.label.visible=E>-25&&E<110&&Math.abs(E)>pf*1.15,y.root.visible&&(y.root.position.set(y.x,Pr(y.x,-E)+.9,-E),y.root.rotation.y=.489,y.label.position.set(y.x,Pr(y.x,-E)+1.05,-E+1.6),vt||y.m.update(e))}for(let y of uy){let E=y.z-r;y.root.visible=E>5&&E<100,y.root.visible&&(y.root.position.set(y.x,Pr(y.x,-E)+2+(vt?0:Math.sin(Ga*2+y.phase)*.16),-E),vt||(y.root.rotation.y=Ga+y.phase))}let x=Eo(.39,.48,t)*(1-Eo(.55,.63,t));Rn.fog.color.set("#b4e6f7").lerp(new Oe("#cebeeb"),x),Co&&(Co.rotation.y=-.5+t*.12,Co.material.color.setRGB(1-x*.15,1-x*.22,1-x*.04)),vs.render(Rn,Ha),!vt&&(a||!vt)&&(tr=requestAnimationFrame(Bm))}async function O1(){try{vs=new fh({canvas:It("#road-canvas"),alpha:!0,antialias:!0,powerPreference:"low-power"}),vs.outputColorSpace=Nt,vs.setClearColor(6277115,1),Rn=new ll,Rn.fog=new al("#b4e6f7",72,122),Ha=new un(56,innerWidth/innerHeight,.1,200),Rn.add(new Ml(16774623,8557996,1.25));let s=new jr(16774626,1.6);s.position.set(-15,28,18),Rn.add(s),Rn.add(new Jt(E1(),km())),ys=R1(),C1(),gy(),N1();let e=new Zr().load("/assets/fr3d/sky.jpg",()=>ts());e.colorSpace=Nt,Co=new Jt(new yl(155,40,20),new ii({map:e,side:bn,fog:!1,depthWrite:!1})),Co.position.y=25,Co.renderOrder=-2,Rn.add(Co),await my(gf[Um][0]),Fm=!0,document.body.classList.add("webgl-ready"),It("#loading-note").textContent="",ts(),I1().then(ts),L1().then(ts),vs.domElement.addEventListener("webglcontextlost",t=>{t.preventDefault(),Fm=!1,cancelAnimationFrame(tr),tr=0,vs=null,document.body.classList.remove("webgl-ready"),It("#loading-note").textContent="The journey continues in pictures."})}catch(s){console.warn("Showing original game artwork as fallback.",s),It("#loading-note").textContent="Follow the Family Rush story \u2193",It("#loading-note").style.opacity="0"}}w1();O1();
