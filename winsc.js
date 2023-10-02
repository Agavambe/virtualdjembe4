function HelpWindow(mypage, myname, w, h, scroll) {
var winl = (screen.width - w) / 2;
var wint = (screen.height - h) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',noresize'
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}


function HelpWindow1(mypage, myname, w, h, scroll) {
var win2 = (screen.width - w) / 2;
var win3 = (screen.height - h) / 2;
winprops = 'height='+h+',width='+w+',top='+win2+',left='+win3+',scrollbars='+scroll+',noresize'
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}