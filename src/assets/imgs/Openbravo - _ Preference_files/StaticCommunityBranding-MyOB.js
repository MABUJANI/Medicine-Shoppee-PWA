/*
 *************************************************************************
 * The contents of this file are subject to the Openbravo  Public  License
 * Version  1.0  (the  "License"),  being   the  Mozilla   Public  License
 * Version 1.1  with a permitted attribution clause; you may not  use this
 * file except in compliance with the License. You  may  obtain  a copy of
 * the License at http://www.openbravo.com/legal/license.html
 * Software distributed under the License  is  distributed  on  an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific  language  governing  rights  and  limitations
 * under the License.
 * The Original Code is Openbravo ERP.
 * The Initial Developer of the Original Code is Openbravo SLU
 * All portions are Copyright (C) 2010 Openbravo SLU
 * All Rights Reserved.
 * Contributor(s):  ______________________________________.
 ************************************************************************
*/


function resizeTextCont() {
  var LinksCont = document.getElementById('LinksCont');
  var TextCont = document.getElementById('TextCont');
  var TextBody = document.getElementById('TextBody');
  var TextScrollCont = document.getElementById('TextScrollCont');
  var TextScrollUp = document.getElementById('TextScrollUp');
  var TextScrollMiddle = document.getElementById('TextScrollMiddle');
  var TextScrollDown = document.getElementById('TextScrollDown');
  var body = document.getElementsByTagName('BODY');
  var bodyHeight = body[0].clientHeight;
  var bodyWidth = body[0].clientWidth;

  var TextCont_style_width = bodyWidth - LinksCont.clientWidth - 30;
  if (TextCont_style_width < 0) {
    TextCont_style_width = 0;
  }
  TextCont.style.width = TextCont_style_width;
  TextCont.style.height = 146;

  TextBody.style.height = 102;

  var TextScrollUp_style_width = parseInt(TextCont_style_width/2, 10) - 2;
  var TextScrollMiddle_style_width = 1;
  var TextScrollDown_style_width = TextCont_style_width - TextScrollMiddle_style_width - TextScrollUp_style_width - 2;
  if (TextScrollUp_style_width < 0) {
    TextScrollUp_style_width = 0;
  }
  if (TextScrollDown_style_width < 0) {
    TextScrollDown_style_width = 0;
  }
  TextScrollUp.style.width = TextScrollUp_style_width;
  TextScrollMiddle.style.width = TextScrollMiddle_style_width;
  TextScrollDown.style.width = TextScrollDown_style_width;

  if (TextBody.scrollTop === 0) {
    document.getElementById('TextScrollUp').className = "TextScrollUp TextScrollUp_disabled";
  } else {
    document.getElementById('TextScrollUp').className = "TextScrollUp TextScrollUp_normal";
  }

  if (TextBody.scrollTop >= TextBody.scrollHeight - TextBody.clientHeight) {
    document.getElementById('TextScrollDown').className = "TextScrollDown TextScrollDown_disabled";
  } else {
    document.getElementById('TextScrollDown').className = "TextScrollDown TextScrollDown_normal";
  }

  if (TextBody.scrollHeight > TextBody.clientHeight + 6) {
    TextBody.style.height = 87;
    TextScrollCont.style.display = '';
  } else {
    TextBody.scrollTop = 0;
    TextScrollCont.style.display = 'none';
    TextBody.style.height = 102;
  }

  if (TextBody.scrollTop >= TextBody.scrollHeight - TextBody.clientHeight) {
    TextBody.scrollTop = TextBody.scrollHeight + 100;
  }

  if (TextBody.scrollTop >= TextBody.scrollHeight - TextBody.clientHeight) {
    document.getElementById('TextScrollDown').className = "TextScrollDown TextScrollDown_disabled";
  } else {
    document.getElementById('TextScrollDown').className = "TextScrollDown TextScrollDown_normal";
  }
}

function resizeLogoCont() {
  var LinksCont = document.getElementById('LinksCont');
  var TextCont = document.getElementById('TextCont');
  var LogoCont = document.getElementById('LogoCont');
  var LogoMiddleCont = document.getElementById('LogoMiddleCont');
  var LogoLeftCont = document.getElementById('LogoLeftCont');
  var LogoRightCont = document.getElementById('LogoRightCont');

  var LogoCont_style_width = LinksCont.clientWidth + TextCont.clientWidth + 10;
  if (LogoCont_style_width < 0) {
    LogoCont_style_width = 0;
  }
  LogoCont.style.width = LogoCont_style_width;
  var LogoMiddleCont_style_width = LogoCont.clientWidth - LogoLeftCont.clientWidth - LogoRightCont.clientWidth - 23;
  if (LogoMiddleCont_style_width < 0) {
    LogoMiddleCont_style_width = 0;
  }
  LogoMiddleCont.style.width = LogoMiddleCont_style_width;

  var minimumLogoMiddleContWidth = (document.getElementById('LogoMiddleText').innerHTML.length * 13) + 20;
  if (LogoMiddleCont.clientWidth > minimumLogoMiddleContWidth) {
    document.getElementById('LogoMiddleText').style.display = '';
  } else {
    document.getElementById('LogoMiddleText').style.display = 'none';
  }
}


function resizeLogoContDemo() {
  function increaseFontSize(p) {
    if (p.style.fontSize) {
      var s = parseInt(p.style.fontSize.replace('px',''));
    } else {
      var s = 12;
    }
    s += 1;
    p.style.fontSize = s + 'px';
  }

  function decreaseFontSize(p) {
    if (p.style.fontSize) {
      var s = parseInt(p.style.fontSize.replace('px',''));
    } else {
      var s = 12;
    }
    s -= 1;
    p.style.fontSize = s + 'px';
  }

  function matchFonts(a, b) {
    if (a.style.fontSize) {
      var af = parseInt(a.style.fontSize.replace('px',''));
    } else {
      var af = 12;
    }
    if (b.style.fontSize) {
      var bf = parseInt(b.style.fontSize.replace('px',''));
    } else {
      var bf = 12;
    }
    var f = Math.min(af, bf);
    a.style.fontSize = f + 'px';
    b.style.fontSize = f + 'px';
  }

  var LinksCont = document.getElementById('LinksCont');
  var TextCont = document.getElementById('TextCont');
  var LogoCont = document.getElementById('LogoCont');
  var LogoMiddleContTop = document.getElementById('LogoMiddleContTop');
  var LogoMiddleContTopSub1 = document.getElementById('LogoMiddleContTopSub1');
  var LogoMiddleContTopSub2 = document.getElementById('LogoMiddleContTopSub2');
  var LogoMiddleContTopSub3 = document.getElementById('LogoMiddleContTopSub3');
  var LogoLeftContTop = document.getElementById('LogoLeftContTop');
  var LogoRightContTop = document.getElementById('LogoRightContTop');

  var LogoCont_style_width = LinksCont.clientWidth + TextCont.clientWidth + 10;
  if (LogoCont_style_width < 0) {
    LogoCont_style_width = 0;
  }
  LogoCont.style.width = LogoCont_style_width;
  var LogoMiddleContTop_style_width = LogoCont.clientWidth - LogoLeftContTop.clientWidth - LogoRightContTop.clientWidth - 23;
  if (LogoMiddleContTop_style_width < 0) {
    LogoMiddleContTop_style_width = 0;
  }
  LogoMiddleContTop.style.width = LogoMiddleContTop_style_width;
  LogoMiddleContTopSub1.style.width = LogoMiddleContTop_style_width;
  LogoMiddleContTopSub2.style.width = LogoMiddleContTop_style_width;
  LogoMiddleContTopSub3.style.width = LogoMiddleContTop_style_width;

  while (LogoMiddleContTopSub3.clientHeight+10 < LogoMiddleContTopSub1.clientHeight) {
    increaseFontSize(LogoMiddleContTopSub3);
  }
  while (LogoMiddleContTopSub3.clientHeight+10 > LogoMiddleContTopSub1.clientHeight) {
    decreaseFontSize(LogoMiddleContTopSub3);
  }

  var LogoMiddleContBottom = document.getElementById('LogoMiddleContBottom');
  var LogoMiddleContBottomSub1 = document.getElementById('LogoMiddleContBottomSub1');
  var LogoMiddleContBottomSub2 = document.getElementById('LogoMiddleContBottomSub2');
  var LogoMiddleContBottomSub3 = document.getElementById('LogoMiddleContBottomSub3');
  var LogoLeftContBottom = document.getElementById('LogoLeftContBottom');
  var LogoRightContBottom = document.getElementById('LogoRightContBottom');

  var LogoCont_style_width = LinksCont.clientWidth + TextCont.clientWidth + 10;
  if (LogoCont_style_width < 0) {
    LogoCont_style_width = 0;
  }
  LogoCont.style.width = LogoCont_style_width;
  var LogoMiddleContBottom_style_width = LogoCont.clientWidth - LogoLeftContBottom.clientWidth - LogoRightContBottom.clientWidth - 23;
  if (LogoMiddleContBottom_style_width < 0) {
    LogoMiddleContBottom_style_width = 0;
  }
  LogoMiddleContBottom.style.width = LogoMiddleContBottom_style_width;
  LogoMiddleContBottomSub1.style.width = LogoMiddleContBottom_style_width;
  LogoMiddleContBottomSub2.style.width = LogoMiddleContBottom_style_width;
  LogoMiddleContBottomSub3.style.width = LogoMiddleContBottom_style_width;

  while (LogoMiddleContBottomSub3.clientHeight+10 < LogoMiddleContBottomSub1.clientHeight) {
    increaseFontSize(LogoMiddleContBottomSub3);
  }
  while (LogoMiddleContBottomSub3.clientHeight+10 > LogoMiddleContBottomSub1.clientHeight) {
    decreaseFontSize(LogoMiddleContBottomSub3);
  }

  matchFonts(LogoMiddleContTopSub3, LogoMiddleContBottomSub3);

  var padCorrect = 0;

  if (navigator.userAgent.toUpperCase().indexOf("MSIE") === -1) { //The following code crashes with IE8
    var LogoMiddleContTopSub2_style_paddingTop = parseInt((LogoMiddleContTopSub1.clientHeight - LogoMiddleContTopSub3.clientHeight)/2, 10) + padCorrect;
    if (LogoMiddleContTopSub2_style_paddingTop < 0) {
      LogoMiddleContTopSub2_style_paddingTop = 0;
    }
    var LogoMiddleContBottomSub2_style_paddingTop = parseInt((LogoMiddleContBottomSub1.clientHeight - LogoMiddleContBottomSub3.clientHeight)/2, 10) + padCorrect;
    if (LogoMiddleContBottomSub2_style_paddingTop < 0) {
      LogoMiddleContBottomSub2_style_paddingTop = 0;
    }

    if (parseInt(LogoMiddleContTopSub2.style.paddingTop.replace('px',''), 10) !== LogoMiddleContTopSub2_style_paddingTop) {
      LogoMiddleContTopSub2.style.paddingTop = LogoMiddleContTopSub2_style_paddingTop + 'px';
    }

    if (parseInt(LogoMiddleContBottomSub2.style.paddingTop.replace('px',''), 10) !== LogoMiddleContBottomSub2_style_paddingTop) {
      LogoMiddleContBottomSub2.style.paddingTop = LogoMiddleContBottomSub2_style_paddingTop + 'px';
    }
  }

}

function onResizeDo(type) {
  var LinksCont = document.getElementById('LinksCont');
  var TextCont = document.getElementById('TextCont');
  var LogoCont = document.getElementById('LogoCont');

  LinksCont.style.display = '';
  TextCont.style.display = '';
  LogoCont.style.display = '';
  TextCont.style.height = '';

  resizeTextCont();
  if (type === 'demo') {
    resizeLogoContDemo();
  } else {
    resizeLogoCont();
  }
}


var step = 1;
var timerDown;
var timerUp;
function scrollButton(button, action) {
  var buttonDir = button.id.replace('TextScroll', '');
  var TextBody = document.getElementById('TextBody');
  var className = "normal";
  if (action === 'onmousedown') {
    if (buttonDir === 'Up') {
      TextBody.scrollTop -= step;
      timerUp = setTimeout(function() { scrollButton(button, action); }, 10);
    } else if (buttonDir === 'Down') {
      TextBody.scrollTop += step;
      timerDown = setTimeout(function() { scrollButton(button, action); }, 10);
    }
    className = "active";
  } else if (action === 'onmouseup') {
    clearTimeout(timerUp);
    clearTimeout(timerDown);
    className = "hover";
  } else if (action === 'onmouseout') {
    clearTimeout(timerUp);
    clearTimeout(timerDown);
    className = "normal";
  } else if (action === 'onmouseover') {
    className = "hover";
  }

  if (TextBody.scrollTop === 0) {
    document.getElementById('TextScrollUp').className = "TextScrollUp TextScrollUp_disabled";
    if (buttonDir === "Up") {
      className = "disabled";
    }
  } else if (buttonDir === "Down") {
    document.getElementById('TextScrollUp').className = "TextScrollUp TextScrollUp_normal";
  }

  if (TextBody.scrollTop >= TextBody.scrollHeight - TextBody.clientHeight) {
    document.getElementById('TextScrollDown').className = "TextScrollDown TextScrollDown_disabled";
    if (buttonDir === "Down") {
      className = "disabled";
    }
  } else if (buttonDir === "Up") {
    document.getElementById('TextScrollDown').className = "TextScrollDown TextScrollDown_normal";
  }

  button.className = "TextScroll" + buttonDir + " TextScroll" + buttonDir + "_" + className;
}