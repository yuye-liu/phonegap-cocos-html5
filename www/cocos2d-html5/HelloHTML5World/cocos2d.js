/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
//var app = {
//    // Application Constructor
//initialize: function() {
//    this.bindEvents();
//},
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//bindEvents: function() {
//    document.addEventListener('deviceready', this.onDeviceReady, false);
//},
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicity call 'app.receivedEvent(...);'
//onDeviceReady: function() {
//    alert(1);
//    test();
//},
//    // Update DOM on a Received Event
//receivedEvent: function(id) {
//    var parentElement = document.getElementById(id);
//    var listeningElement = parentElement.querySelector('.listening');
//    var receivedElement = parentElement.querySelector('.received');
//
//    listeningElement.setAttribute('style', 'display:none;');
//    receivedElement.setAttribute('style', 'display:block;');
//
//    console.log('Received Event: ' + id);
//}
//};
(function () {
 var d = document;
 var c = {
 COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
 box2d:false,
 chipmunk:false,
 showFPS:true,
 frameRate:60,
 loadExtension:false,
 renderMode:0,       //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
 tag:'gameCanvas', //the dom element to run cocos2d on
 engineDir:'cocos2d-html5/cocos2d/',
 //SingleEngineFile:'',
 appFiles:[
           'cocos2d-html5/HelloHTML5World/src/resource.js',
           'cocos2d-html5/HelloHTML5World/src/myApp.js'//add your own files in order here
           ]
 };
 
 if(!d.createElement('canvas').getContext){
 var s = d.createElement('div');
 s.innerHTML = '<h2>Your browser does not support HTML5 canvas!</h2>' +
 '<p>Google Chrome is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.Click the logo to download.</p>' +
 '<a href="http://www.google.com/chrome" target="_blank"><img src="http://www.google.com/intl/zh-CN/chrome/assets/common/images/chrome_logo_2x.png" border="0"/></a>';
 var p = d.getElementById(c.tag).parentNode;
 p.style.background = 'none';
 p.style.border = 'none';
 p.insertBefore(s,d.getElementById(c.tag));
 
 d.body.style.background = '#ffffff';
 return;
 }
 
 window.addEventListener('DOMContentLoaded', function () {
                         this.removeEventListener('DOMContentLoaded', arguments.callee, false);
                         //first load engine file if specified
                         var s = d.createElement('script');
                         /*********Delete this section if you have packed all files into one*******/
                         if (c.SingleEngineFile && !c.engineDir) {
                         s.src = c.SingleEngineFile;
                         }
                         else if (c.engineDir && !c.SingleEngineFile) {
                         s.src = c.engineDir + 'jsloader.js';
                         }
                         else {
                         alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
                         }
                         /*********Delete this section if you have packed all files into one*******/
                         
                         //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one
                         
                         document.ccConfig = c;
                         s.id = 'cocos2d-html5';
                         d.body.appendChild(s);
                         //else if single file specified, load singlefile
                         });
 })();
//document.addEventListener('deviceready', function(){test()}, false);