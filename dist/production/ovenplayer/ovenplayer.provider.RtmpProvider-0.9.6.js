/*! For license information please see ovenplayer.provider.RtmpProvider-0.9.6.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{304:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pickCurrentSource=e.errorTrigger=e.separateLive=e.extractVideoElement=void 0;var n=t(1),o=function(A){return A&&A.__esModule?A:{default:A}}(t(8));e.extractVideoElement=function(A){return o.default.isElement(A)?A:A.getVideoElement?A.getVideoElement():A.media?A.media:null},e.separateLive=function(A){return!(!A||!A.isDynamic)&&A.isDynamic()},e.errorTrigger=function(A,e){e&&(e.setState(n.STATE_ERROR),e.pause(),e.trigger(n.ERROR,A))},e.pickCurrentSource=function(A,e,t){var n=Math.max(0,e);if(A)for(var o=0;o<A.length;o++)if(A[o].default&&(n=o),t.getSourceIndex()===o)return o;return n}},317:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(t(318)),o=a(t(6)),r=(t(304),t(1));function a(A){return A&&A.__esModule?A:{default:A}}e.default=function(A,e,t,a,i){var l="",u="",s={},g=!1,c=!1,E={started:!1,active:!1,isVideoEnded:!1},d=null,C=null,f=null,m=null,y=null,T=null,S=null,v=!1,p=!1,B=t.getBrowser(),I="Android"===B.os||"iOS"===B.os;OvenPlayerConsole.log("ADS : started ","isMobile : ",I,a);try{l=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,u=google.ima.AdErrorEvent.Type.AD_ERROR,google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),d=function(A){console.log(A.getError().getVastErrorCode(),A.getError().getMessage()),c=!0;var t=A.getError().getInnerError();t&&console.log(t.getErrorCode(),t.getMessage()),e.trigger(r.STATE_AD_ERROR,{code:A.getError().getVastErrorCode(),message:A.getError().getMessage()}),E.active=!1,E.started=!0,e.play()},C=function(t){OvenPlayerConsole.log("ADS : OnManagerLoaded ");var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,y&&(OvenPlayerConsole.log("ADS : destroy adsManager----"),T.destroy(),T=null,y.destroy(),y=null),y=t.getAdsManager(A,o),T=(0,n.default)(y,e,E,d),OvenPlayerConsole.log("ADS : created admanager and listner "),g=!0},f=new google.ima.AdDisplayContainer(function(){var A=document.createElement("div");return A.setAttribute("class","ovp-ads"),A.setAttribute("id","ovp-ads"),t.getContainer().append(A),A}(),A),(m=new google.ima.AdsLoader(f)).addEventListener(l,C,!1),m.addEventListener(u,d,!1),OvenPlayerConsole.log("ADS : adDisplayContainer initialized"),e.on(r.CONTENT_VOLUME,function(A){y&&(A.mute?y.setVolume(0):y.setVolume(A.volume/100))},s);var P=function(){S&&(OvenPlayerConsole.log("ADS : setADWillAutoPlay ","autoplayAllowed",v,"autoplayRequiresMuted",p),S.setAdWillAutoPlay(v),S.setAdWillPlayMuted(p),p&&e.trigger(r.PLAYER_WARNING,{message:r.WARN_MSG_MUTEDPLAY,timer:1e4,iconClass:r.UI_ICONS.volume_mute,onClickCallback:function(){e.setMute(!1)}}))};return s.isActive=function(){return E.active},s.started=function(){return E.started},s.play=function(){return E.started?new Promise(function(A,e){try{y.resume(),A()}catch(A){e(A)}}):(f.initialize(),new Promise(function(n,o){var i=0;(function(){OvenPlayerConsole.log("ADS : checkAutoplaySupport() ");var t=document.createElement("video");t.setAttribute("playsinline","true"),t.src="data:video/mp4;base64, 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",t.load(),I&&e.getName()!==r.PROVIDER_DASH&&A.load();var n=function(A,e){v=A,p=e,t.pause(),t.remove(),P()};return new Promise(function(A,e){if(t.play){var o=t.play();void 0!==o?o.then(function(){OvenPlayerConsole.log("ADS : auto play allowed."),n(!0,!1),A()}).catch(function(e){OvenPlayerConsole.log("ADS : auto play failed",e.message),n(!1,!1),A()}):(OvenPlayerConsole.log("ADS : promise not support"),n(!0,!1),A())}else OvenPlayerConsole.log("ADS : !temporarySupportCheckVideo.play"),n(!0,!1),A()})})().then(function(){t.isAutoStart()&&!v?(OvenPlayerConsole.log("ADS : autoplayAllowed : false"),E.started=!1,o(new Error("autoplayNotAllowed"))):(g=!1,OvenPlayerConsole.log("ADS : initRequest() AutoPlay Support : ","autoplayAllowed",v,"autoplayRequiresMuted",p),(S=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,P(),S.adTagUrl=a,m.requestAds(S),OvenPlayerConsole.log("ADS : requestAds Complete"),function A(){i++,g?(OvenPlayerConsole.log("ADS : ad start!"),y.init("100%","100%",google.ima.ViewMode.NORMAL),y.start(),E.started=!0,n()):c?o(new Error("admanagerLoadingTimeout")):i<150?setTimeout(A,100):o(new Error("admanagerLoadingTimeout"))}())})}))},s.pause=function(){y.pause()},s.videoEndedCallback=function(A){!T||!T.isAllAdComplete()&&T.isLinearAd()?c?A():(E.isVideoEnded=!0,m.contentComplete()):A()},s.destroy=function(){m&&(m.removeEventListener(l,C),m.removeEventListener(u,d)),y&&y.destroy(),f&&f.destroy(),T&&T.destroy();var A=(0,o.default)(t.getContainer()).find(".ovp-ads");A&&A.remove(),e.off(r.CONTENT_VOLUME,null,s)},s}catch(A){return null}}},318:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(A){A&&A.__esModule}(t(6));var n=t(1);e.default=function(A,e,t,o){var r={},a={},i=null,l=google.ima.AdEvent.Type.AD_BUFFERING,u=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,s=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,g=google.ima.AdErrorEvent.Type.AD_ERROR,c=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,E=google.ima.AdEvent.Type.CLICK,d=google.ima.AdEvent.Type.SKIPPED,C=google.ima.AdEvent.Type.COMPLETE,f=google.ima.AdEvent.Type.FIRST_QUARTILE,m=google.ima.AdEvent.Type.LOADED,y=google.ima.AdEvent.Type.MIDPOINT,T=google.ima.AdEvent.Type.PAUSED,S=google.ima.AdEvent.Type.RESUMED,v=google.ima.AdEvent.Type.STARTED,p=google.ima.AdEvent.Type.USER_CLOSE,B=google.ima.AdEvent.Type.THIRD_QUARTILE,I=!1,P=null;return OvenPlayerConsole.log("ADS : Listener Created"),a[u]=function(A){OvenPlayerConsole.log("ADS LISTENER : ",A.type),t.started&&(t.active=!0,e.pause())},a[s]=function(A){OvenPlayerConsole.log("ADS LISTENER : ",A.type),t.active=!1,!t.started||0!==e.getPosition()&&t.isVideoEnded||e.play()},a[g]=function(A){I=!0,o(A)},a[c]=function(A){OvenPlayerConsole.log("ADS LISTENER : ",A.type),I=!0,t.isVideoEnded&&e.setState(n.STATE_COMPLETE)},a[E]=function(A){OvenPlayerConsole.log(A.type),e.trigger(n.PLAYER_CLICKED,{type:n.PLAYER_AD_CLICK})},a[f]=function(A){OvenPlayerConsole.log(A.type)},a[l]=function(A){OvenPlayerConsole.log("AD_BUFFERING",A.type)},a[m]=function(t){OvenPlayerConsole.log(t.type);var o=A.getRemainingTime(),r=t.getAd();e.trigger(n.STATE_AD_LOADED,{remaining:o,isLinear:r.isLinear()})},a[y]=function(A){OvenPlayerConsole.log(A.type)},a[T]=function(A){OvenPlayerConsole.log(A.type),e.setState(n.STATE_AD_PAUSED)},a[S]=function(A){OvenPlayerConsole.log(A.type),e.setState(n.STATE_AD_PLAYING)},a[v]=function(o){OvenPlayerConsole.log(o.type);var r=o.getAd();P=r;var a={isLinear:r.isLinear(),duration:r.getDuration(),skipTimeOffset:r.getSkipTimeOffset()};e.trigger(n.AD_CHANGED,a),r.isLinear()?(e.setState(n.STATE_AD_PLAYING),t.started=!0,i=setInterval(function(){var t=A.getRemainingTime(),o=r.getDuration();e.trigger(n.AD_TIME,{duration:o,skipTimeOffset:r.getSkipTimeOffset(),remaining:t,position:o-t,skippable:A.getAdSkippableState()})},300)):e.play()},a[C]=function(A){OvenPlayerConsole.log(A.type),A.getAd().isLinear()&&clearInterval(i),e.trigger(n.STATE_AD_COMPLETE)},a[d]=function(A){OvenPlayerConsole.log(A.type),A.getAd().isLinear()&&clearInterval(i),e.trigger(n.STATE_AD_COMPLETE)},a[p]=function(A){OvenPlayerConsole.log(A.type),A.getAd().isLinear()&&clearInterval(i),e.trigger(n.STATE_AD_COMPLETE)},a[B]=function(A){OvenPlayerConsole.log(A.type)},Object.keys(a).forEach(function(e){A.removeEventListener(e,a[e]),A.addEventListener(e,a[e])}),r.setAdCompleteCallback=function(A){},r.isAllAdComplete=function(){return I},r.isLinearAd=function(){return!P||P.isLinear()},r.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),Object.keys(a).forEach(function(e){A.removeEventListener(e,a[e])})},r}},382:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(t(317)),o=l(t(66)),r=l(t(383)),a=t(304),i=t(1);function l(A){return A&&A.__esModule?A:{default:A}}e.default=function(A,e){OvenPlayerConsole.log("CORE loaded. ");var t={};(0,o.default)(t);var l=A.element,u=null,s=null;Object.defineProperty(l,"currentTime",{value:0,writable:!0}),A.adTagUrl&&((u=(0,n.default)(l,t,e,A.adTagUrl))||console.log("Can not load due to google ima for Ads.")),s=(0,r.default)(l,t,u?u.videoEndedCallback:null);var g=function(e){var n=A.sources[A.currentSource];OvenPlayerConsole.log("source loaded : ",n,"lastPlayPosition : "+e);var o=l.getCurrentSource();n.file!==o?l.load(n.file):0===e&&t.getPosition()>0&&t.seek(e)},c=function(A){A>0&&(e.isAutoStart()||t.play(),t.seek(A)),e.isAutoStart()&&t.play()};return t.triggerEventFromExternal=function(A,e){return s[A]?s[A](e):null},t.getName=function(){return A.name},t.canSeek=function(){return A.canSeek},t.setCanSeek=function(e){A.canSeek=e},t.isSeeking=function(){return A.seeking},t.setSeeking=function(e){A.seeking=e},t.setState=function(e){if(A.state!==e){var n=A.state;if(n===i.STATE_AD_PLAYING&&(e===i.STATE_ERROR||e===i.STATE_IDLE))return!1;switch(e){case i.STATE_COMPLETE:t.trigger(i.PLAYER_COMPLETE);break;case i.STATE_PAUSED:t.trigger(i.PLAYER_PAUSE,{prevState:A.state,newstate:i.STATE_PAUSED});break;case i.STATE_AD_PAUSED:t.trigger(i.PLAYER_PAUSE,{prevState:A.state,newstate:i.STATE_AD_PAUSED});break;case i.STATE_PLAYING:t.trigger(i.PLAYER_PLAY,{prevState:A.state,newstate:i.STATE_PLAYING});case i.STATE_AD_PLAYING:t.trigger(i.PLAYER_PLAY,{prevState:A.state,newstate:i.STATE_AD_PLAYING})}A.state=e,t.trigger(i.PLAYER_STATE,{prevstate:n,newstate:A.state})}},t.getState=function(){return A.state},t.setBuffer=function(A){},t.getBuffer=function(){if(l)return l.getBuffer?l.getBuffer():null},t.getDuration=function(){if(l)return l.getDuration?l.getDuration():0},t.getPosition=function(){if(l)return l.getPosition?l.getPosition():0},t.setVolume=function(A){if(l)return l.setVolume?l.setVolume(A):0},t.getVolume=function(){if(l)return l.setVolume?l.getVolume():0},t.setMute=function(){l&&l.setMute()},t.getMute=function(){if(l)return!!l.getMute&&l.getMute()},t.preload=function(n,o){OvenPlayerConsole.log("CORE : preload() ",n,o);var r=0;return A.sources=n,A.currentSource=(0,a.pickCurrentSource)(n,A.currentSource,e),new Promise(function(A,n){!function a(){return r++,l.isFlashReady&&l.isFlashReady()?(Object.defineProperty(l,"duration",{value:l.getDuration()}),g(o||0),r=0,function a(){return r++,l.isFileLoaded&&l.isFileLoaded()?(c(o),e.isMute()&&t.setMute(!0),e.getVolume()&&e.getVolume()<100&&t.setVolume(e.getVolume()),A()):r<300?void setTimeout(a,100):n(i.ERRORS[i.INIT_RTMP_SETUP_ERROR])}()):r<100?void setTimeout(a,100):n(i.ERRORS[i.INIT_RTMP_SETUP_ERROR])}()})},t.load=function(t){A.sources=t,A.currentSource=(0,a.pickCurrentSource)(t,A.currentSource,e),g(0),c(0)},t.play=function(){if(!l)return!1;t.getState()!==i.STATE_PLAYING&&(u&&u.isActive()||u&&!u.started()?u.play():l.play())},t.pause=function(){if(!l)return!1;t.getState()===i.STATE_PLAYING?l.pause():t.getState()===i.STATE_AD_PLAYING&&u.pause()},t.seek=function(A){l.seek(A)},t.setPlaybackRate=function(A){return 0},t.getPlaybackRate=function(){return 0},t.getSources=function(){return l?A.sources.map(function(A,e){return{file:A.file,type:A.type,label:A.label,index:e}}):[]},t.getCurrentSource=function(){return A.currentSource},t.setCurrentSource=function(n,o){if(A.currentQuality===n)return!1;if(n>-1&&A.sources&&A.sources.length>n){if(t.pause(),t.setState(i.STATE_IDLE),OvenPlayerConsole.log("source changed : "+n),A.currentSource=n,t.trigger(i.CONTENT_SOURCE_CHANGED,{currentSource:n}),e.setSourceIndex(n),o){var r=l.getCurrentTime()||0,a=0;g(r),function A(){a++,l.isFileLoaded&&l.isFileLoaded()?c(r):a<300?setTimeout(A,100):console.log("FileLoad failed")}()}return A.currentSource}},t.getQualityLevels=function(){return l?A.qualityLevels:[]},t.getCurrentQuality=function(){return l?A.currentQuality:null},t.setCurrentQuality=function(A){},t.isAutoQuality=function(){},t.setAutoQuality=function(A){},t.getFramerate=function(){return A.framerate},t.setFramerate=function(e){return A.framerate=e},t.seekFrame=function(e){var n=A.framerate,o=(l.getCurrentTime()*n+e)/n;o+=1e-5,t.pause(),t.seek(o)},t.stop=function(){OvenPlayerConsole.log("CORE : stop() "),l.stop()},t.destroy=function(){OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied"),t.stop(),u&&u.destroy(),t.off()},t.super=function(A){var e=t[A];return function(){return e.apply(t,arguments)}},t}},383:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1);e.default=function(A,e,t){var o={isJSReady:function(){return!0},timeupdate:function(t){A.currentTime=t.position,e.trigger(n.CONTENT_TIME,t)},volumeChanged:function(A){e.trigger(n.CONTENT_VOLUME,A)},stateChanged:function(A){e.setState(A.newstate)},metaChanged:function(A){e.trigger(n.CONTENT_META,A)},error:function(A){e.setState(n.STATE_ERROR),e.pause(),e.trigger(n.ERROR,A)}};return o}},76:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1),o=function(A){return A&&A.__esModule?A:{default:A}}(t(382));e.default=function(A,e,t){var r={},a=null,i={name:n.PROVIDER_RTMP,element:A,mse:null,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:n.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:t};return r=(0,o.default)(i,e,null),a=r.super("destroy"),OvenPlayerConsole.log("RTMP PROVIDER LOADED."),r.destroy=function(){OvenPlayerConsole.log("RTMP : PROVIDER DESTROYED."),a()},r}}}]);