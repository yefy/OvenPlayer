/*! For license information please see ovenplayer.provider.HlsProvider-0.9.6214.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{75:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=r(t(314)),o=(t(304),t(1));r(t(8));function r(e){return e&&e.__esModule?e:{default:e}}n.default=function(e,n,t){var r={},a=null,s=null;try{(a=new Hls({debug:!1})).attachMedia(e);var u={name:o.PROVIDER_HLS,element:e,mse:a,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:o.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:t};r=(0,l.default)(u,n,function(e,t){OvenPlayerConsole.log("HLS : onExtendedLoad : ",e,"lastPlayPosition : "+t),a.loadSource(e.file),a.once(Hls.Events.LEVEL_LOADED,function(e,l){l.details.live?u.isLive=!0:t>0&&r.seek(t),n.isAutoStart()&&r.play()})}),s=r.super("destroy"),OvenPlayerConsole.log("HLS PROVIDER LOADED."),r.destroy=function(){a.destroy(),a=null,OvenPlayerConsole.log("HLS : PROVIDER DESTROUYED."),s()}}catch(e){var i=o.ERRORS[o.INIT_HLSJS_NOTFOUND];throw i.error=e,i}return r}}}]);