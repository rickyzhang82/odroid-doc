function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function set_odr_pop_cookie(uid) {
	var form_nm = eval("document.mainPopup"+uid);
	var cookie_nm = "main_pLayer"+uid;

	com_odroid.location.href="http://com.odroid.com/sigong/_admin/notice_mgmt/notice_cookie.php?uid="+uid;

	if ( form_nm.donot_chk.checked ==true){ 
		setCookie( cookie_nm, uid , 1 );		
	}
} 

function set_odr_pop_cookie2(uid) {
	var form_nm = eval("document.mainPopup"+uid);
	var cookie_nm = "main_pLayer"+uid;

	com_odroid.location.href="http://com.odroid.com/sigong/_admin/notice_mgmt/notice_cookie.php?uid="+uid;

	if ( form_nm.donot_chk.checked ==true){ 
		setCookie( cookie_nm, uid , 1 );		
	}
	self.close();
}  

function set_hk_pop_cookie(uid) {
	var form_nm = eval("document.mainPopup"+uid);
	var cookie_nm = "main_pLayer"+uid;

	com_odroid.location.href="http://www.hardkernel.com/renewal_2011/_admin/notice_mgmt/notice_cookie.php?uid="+uid;

	if ( form_nm.donot_chk.checked ==true){ 
		setCookie( cookie_nm, uid , 1 );		
	}

	
}  

//견적서 요청 팝업
function open_order_info(){
	window.open("/main/shop/pop_order_info.php","ORDER_INFO","width=485,height=500,scrollbars=yes");
}

//견적서 요청 팝업 //::chk
function open_order_info_ext(){
	window.open("/main/shop/pop_order_info.php","ORDER_INFO","width=485,height=500,scrollbars=yes");
}

//견적서 요청 팝업(영어)
function open_order_info_en(pay_method){
	window.open("/main/shop/pop_order_info_en.php?pay_method="+pay_method,"ORDER_INFO","width=485,height=500,scrollbars=yes");
}

//견적서 요청 팝업(영어) //::chk
function open_order_info_en_ext(pay_method){
	window.open("/main/shop/pop_order_info_en.php?pay_method="+pay_method,"ORDER_INFO","width=485,height=500,scrollbars=yes");
}


function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function form_null_chk(f, eName, eText, eType){

	for(i=0;i<eName.length;i++){
		if(eType[i]=="text"){
			if(trim(eval("f."+eName[i]+".value"))==""){
				alert(eText[i] + "를 입력해 주세요");
				eval("f." + eName[i] + ".focus()");
				return false;
			}
		}else if(eType[i]=="select"){
			if(eval("f."+eName[i]+".selectedIndex")==0){
				alert(eText[i] +"를 선택해 주세요");
				eval("f." + eName[i] + ".focus()");
				return false;
			}
		}else if(eType[i]=="radio" || eType[i]=="checkbox"){
			var flag=0;
			
			for(j=0;j<eval("f."+ eName[i] + ".length");j++){
				
				if(eval("f." + eName[i] + "[j].checked==true")){
					flag=1;
				}
			}
			if(flag==0){
				alert(eText[i] + "를 선택해 주세요");
				return false;
			}
			
		}else if(eType[i]=="file"){
			if(eval("f."+eName[i]+".value")==""){
				alert(eText[i] + "을 선택해주세요");
				return false;
			}
		}
	}	
}

/* 레이어 탭 */
function overTab(obj, select, none) {
    var tab_id = obj.id;
    var cObj = obj.parentNode.firstChild;
    while(cObj) {
        if((cObj.nodeName == "DIV" || cObj.nodeName == "LI") && cObj.id) {
            var cTabID= cObj.id;
            if(cTabID.indexOf('tab')<0) continue;
            var cContentID = cTabID.replace(/^tab/,'content');

            if(tab_id == cTabID) {
                cObj.className = select;
            } else {
                cObj.className = none;
            }
        }
        cObj = cObj.nextSibling;
    }

}
function xGetElementById(e)
{
	if(typeof(e)!='string') return e;
	if(document.getElementById) e=document.getElementById(e);
	else if(document.all) e=document.all[e];
	else e=null;
	return e;
}

/**
 * 앞뒤 공백 제거
 */
function trim(str)
{
     return str.replace(/(^[ \f\n\r\t]*)|([ \f\n\r\t]*$)/g, ""); 
} 

/**
 * 자바스크립트로 PHP의 number_format 처리( 숫자에 , 를 출력 )
 */
function number_format(data)
{
	
	var tmp = '';
	var number = '';
	var cutlen = 3;
	var comma = ',';
	var i;

	data = data+'';

	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i=0; i<data.length; i++)
	{
		number = number + data.charAt(i);

		if (i < data.length - 1)
		{
			k++;
			if ((k % cutlen) == 0)
			{
				number = number + comma;
				k = 0;
			}
		}
	}

	return number;
}

/**
 * 화폐 단위 컴마(,)를 없앤다. (화폐단위인 숫자를 일반 숫자만 표기할때)
 * @param str 문자열
 * @return String
 */
function del_comma(num)
{
	var quote = /,/g;
	return num.replace(quote,"");
}

/**
 * 숫자 1~9이하일 경우 01~09로 "0"을 추가 
 * @return 0x 타입 
 */ 
function zero_paste(num)
{
	if(num.toString().length==1){
		num = "0" + num;
	}
	
	return num;
}

function numeric_chk(val) 
{
	var len = val.length;
	var i1;
	var c;
	for(i1 = 0; i1 < len; i1++) {
		c = val.substring(i1, i1 + 1);
		
		if(i1==0 && c=='-'){
		}else{
			if (c < '0' || c > '9'){
				return false;
			}
		}
	}
	return true;
}

function cart_cnt_chk(val,cnt){
	var v = val.value;

	if(numeric_chk(v)==false || v==""){
		alert("숫자만 입력가능합니다");
		val.value=cnt;
		val.focus();
		return false;
	}

}
/**
 * 비교할 문자열 패턴 선택
 * 참고 약자 = 한글 : h, 영문 : e , 숫자 : n, _(언더버) : u, -(하이픈) : p
 * 
 * @param String select_pattern 비교할 문자열 패턴 선택
 * @return String str 비교할 문자열
 */
function str_pattern_chk(select_pattern,str)
{
	var pattern;

	switch(select_pattern){
		case 'h':	/* 한글인지 검사 (자음, 모음만 있는 한글은 불가) */
		pattern = /([^가-힣\x20])/i;
		break;	
		case 'h1':	/* 한글인지 검사2 (자음, 모음만 있는 한글도 가능) */
		pattern = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
		break;	
		case 'e':	/* 영문자 검사(대소문자) */
		pattern = /(^[a-zA-Z]+$)/;
		break;	
		case 'en':	/* 영문자와 숫자 검사 */
		pattern = /(^[a-zA-Z0-9]+$)/;
		break;	
		case 'enu':	/* 영문자와 숫자 그리고 _ 검사 */
		pattern = /(^[a-zA-Z0-9\_]+$)/;
		break;	
		case 'enup':	/* 첫문자는 영문이고 영문,숫자,_,-만 허용 (아이디 이용) */
		pattern = /(^([a-zA-Z]+)([a-zA-Z0-9\_\-]+$))/;
		break;	
		case 'enup2':	/* 첫문자는 영문이고 영문,숫자,_,-만 허용 (아이디 이용) */
		pattern = /(^[a-zA-Z0-9\_\-\#\~]+$)/;
		break;	
		case 'enhup':	/* 영문, 숫자, 한글, _, - 검사 */
		pattern = /(^[a-zA-Z0-9\_\-\가-힣\x20]+$)/i;
		break;
		case 'tel':	/* 숫자 그리고 - 검사 */
		pattern = /(^[0-9\-]+$)/;
		break;	
		case 'us_no_chk':	/* 숫자 검사 */
		pattern = /(^[0-9]+$)/;
		break;	
	}
	
	if (!pattern.test(str)) {
		return false;
    }else{
		return true;
	}
}

// 영문, 숫자, 빈칸, 언더바 체크
function eng_chk(t){
	var str = t.value;

	if(str!="" && str_pattern_chk('enup2',str)==false){
		alert('English only please enter...');
		t.focus();
		t.value="";
		return false;
	}
}


function emailCheck(emailStr,lang) {
	var emailPat=/^(.+)@(.+)$/;
	var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
	var validChars="\[^\\s" + specialChars + "\]";
	var firstChars=validChars;
	var quotedUser="(\"[^\"]*\")";
	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
	var atom="(" + firstChars + validChars + "*" + ")";
	var word="(" + atom + "|" + quotedUser + ")";
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

	if(emailStr!=""){
		var matchArray=emailStr.match(emailPat);
		if (matchArray==null) {
			if(lang=='en') {
				alert("Please enter the valid email address.");
			} else {
				alert("E-mail 주소가 정확하지 않습니다.\n @ 와 . 을 확인하십시오");
			}
			return false;
		}
		var user=matchArray[1];
		var domain=matchArray[2];	
		if (user.match(userPat)==null) {
			alert("메일 아이디가 정확한 것 같지 않습니다.");
			return false;
		}
		var IPArray=domain.match(ipDomainPat);
		if (IPArray!=null) {
			for (var i=1;i<=4;i++) {
				if (IPArray[i]>255) {
					alert("IP가 정확하지 않습니다!");
					return false;
				}
			}
			return true;
		}
		var domainArray=domain.match(domainPat);	
		if (domainArray==null) {
			if(lang=='en') {
				alert("Please enter the valid email address.");
			} else {
				alert("E-mail 주소가 정확하지 않습니다.\n @ 와 . 을 확인하십시오");
			}
			return false;
		}
		var atomPat=new RegExp(atom,"g");
		var domArr=domain.match(atomPat);
		var len=domArr.length;
		
		if (domArr[domArr.length-1].length<2 ||
			 domArr[domArr.length-1].length>3) {
			if(lang=='en') {
				alert("Please enter the valid email address.");
			} else {
				alert("E-mail 주소가 정확하지 않습니다.\n @ 와 . 을 확인하십시오");
			}
			return false;
		}	
		if (domArr[domArr.length-1].length==3 && len<2) {
			if(lang=='en') {
				alert("Please enter the valid email address.");
			} else {
				alert("E-mail 주소가 정확하지 않습니다.\n @ 와 . 을 확인하십시오");
			}
			return false;
		}
	}
	return true;
}

function img_view(what) { 
	var imgwin = window.open("",'WIN','scrollbars=yes,status=0,resizable=0,width=10,height=10,left=100,top=100'); 
	imgwin.focus(); 
	imgwin.document.open(); 
	imgwin.document.write("<html>\n"); 
	imgwin.document.write("<head>\n"); 
	imgwin.document.write("<title>확대사진</title>\n"); 

	imgwin.document.write("<sc"+"ript>\n"); 
	imgwin.document.write("function resize() {\n"); 
	imgwin.document.write("pic = document.il;\n"); 
	//imgwin.document.write("alert(eval(pic).height);\n"); 
	imgwin.document.write("if (eval(pic).height) { var name = navigator.appName\n"); 
	imgwin.document.write(" if (name == 'Microsoft Internet Explorer') { myHeight = eval(pic).height + 40; myWidth = eval(pic).width + 20;\n"); 
	imgwin.document.write(" } else { myHeight = eval(pic).height + 7; myWidth = eval(pic).width - 2; }\n"); 
	imgwin.document.write(" clearTimeout();\n"); 
	imgwin.document.write(" var height = screen.height;\n"); 
	imgwin.document.write(" var width = screen.width;\n"); 

	imgwin.document.write(" self.resizeTo(myWidth, myHeight+40);\n"); 
	imgwin.document.write("}else setTimeOut(resize(), 100);}\n"); 
	imgwin.document.write("</sc"+"ript>\n"); 

	imgwin.document.write("</head>\n"); 
	imgwin.document.write('<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#FFFFFF">\n'); 

	imgwin.document.write("<img border=0 src="+what+" xwidth=300 xheight=7 name=il onload='resize();' onclick='self.close()' style='cursor:hand'>\n"); 
	imgwin.document.write("</body>\n"); 
	imgwin.document.close(); 
} 



/**
 * 전체 문자열 수 리턴
 * @param String str 입력된 문자열
 * @return String nToLen 문자열 수
 */ 
function count_len(str) 
{
   var tmpcur = "";
   var tmpbak = "";
   var nToLen = 0;		//입력된 문자열 수
   var tmp;

   for(var i=0; i < str.length; i++) {
   
	  tmpbak = tmpcur;
	  tmpcur = str.charAt(i);
	  nToLen += one_char_byte(tmpcur,tmpbak);
   }
   return nToLen;
}

/**
 * 문자 1 char byte 수 리턴
 */ 
function one_char_byte(cTmp,cBak) 
{
	var nTmp = 0;

	if(cTmp == '\n') { 
		nTmp=2;
		if(cBak != '\r') { 
			nTmp = 1; 
		}		
	}else if(escape(cTmp).length > 4) {
	   nTmp = 2; 
	} else if(cTmp == '<' || cTmp == '>') {
		nTmp = 4; 
	} else if(cTmp!='\r') {
		nTmp++; 
	}

	return nTmp;
}

//견적서 요청 팝업(영어)
function open_order_document(url,qid){
	window.open(url+"?qid="+qid,"ORDER_INFO","width=880,height=700,scrollbars=yes");
}
function open_invoice_document(url,oid){
	window.open(url+"?oid="+oid,"ORDER_INVOICE_INFO","width=880,height=700,scrollbars=yes");
}