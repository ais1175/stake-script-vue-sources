/*! For license information please see ieee754.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[3953],{20241:(a,o)=>{o.read=function(a,o,t,h,r){var M,p,w=8*r-h-1,f=(1<<w)-1,e=f>>1,n=-7,i=t?r-1:0,s=t?-1:1,u=a[o+i];for(i+=s,M=u&(1<<-n)-1,u>>=-n,n+=w;n>0;M=256*M+a[o+i],i+=s,n-=8);for(p=M&(1<<-n)-1,M>>=-n,n+=h;n>0;p=256*p+a[o+i],i+=s,n-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:1/0*(u?-1:1);p+=Math.pow(2,h),M-=e}return(u?-1:1)*p*Math.pow(2,M-h)},o.write=function(a,o,t,h,r,M){var p,w,f,e=8*M-r-1,n=(1<<e)-1,i=n>>1,s=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,u=h?0:M-1,N=h?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=n):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),(o+=p+i>=1?s/f:s*Math.pow(2,1-i))*f>=2&&(p++,f/=2),p+i>=n?(w=0,p=n):p+i>=1?(w=(o*f-1)*Math.pow(2,r),p+=i):(w=o*Math.pow(2,i-1)*Math.pow(2,r),p=0));r>=8;a[t+u]=255&w,u+=N,w/=256,r-=8);for(p=p<<r|w,e+=r;e>0;a[t+u]=255&p,u+=N,p/=256,e-=8);a[t+u-N]|=128*l}}}]);
//# sourceMappingURL=ieee754.js.map