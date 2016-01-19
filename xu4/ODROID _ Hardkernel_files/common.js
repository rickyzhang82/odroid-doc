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

//°ßÀû¼­ ¿äÃ» ÆË¾÷
function open_order_info(){
	window.open("/main/shop/pop_order_info.php","ORDER_INFO","width=485,height=500,scrollbars=yes");
}

//°ßÀû¼­ ¿äÃ» ÆË¾÷ //::chk
function open_order_info_ext(){
	window.open("/main/shop/pop_order_info.php","ORDER_INFO","width=485,height=500,scrollbars=yes");
}

//°ßÀû¼­ ¿äÃ» ÆË¾÷(¿µ¾î)
function open_order_info_en(pay_method){
	window.open("/main/shop/pop_order_info_en.php?pay_method="+pay_method,"ORDER_INFO","width=485,height=500,scrollbars=yes");
}

//°ßÀû¼­ ¿äÃ» ÆË¾÷(¿µ¾î) //::chk
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
				alert(eText[i] + "¸¦ ÀÔ·ÂÇØ ÁÖ¼¼¿ä");
				eval("f." + eName[i] + ".focus()");
				return false;
			}
		}else if(eType[i]=="select"){
			if(eval("f."+eName[i]+".selectedIndex")==0){
				alert(eText[i] +"¸¦ ¼±ÅÃÇØ ÁÖ¼¼¿ä");
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
				alert(eText[i] + "¸¦ ¼±ÅÃÇØ ÁÖ¼¼¿ä");
				return false;
			}
			
		}else if(eType[i]=="file"){
			if(eval("f."+eName[i]+".value")==""){
				alert(eText[i] + "À» ¼±ÅÃÇØÁÖ¼¼¿ä");
				return false;
			}
		}
	}	
}

/* ·¹ÀÌ¾î ÅÇ */
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
 * ¾ÕµÚ °ø¹é Á¦°Å
 */
function trim(str)
{
     return str.replace(/(^[ \f\n\r\t]*)|([ \f\n\r\t]*$)/g, ""); 
} 

/**
 * ÀÚ¹Ù½ºÅ©¸³Æ®·Î PHPÀÇ number_format Ã³¸®( ¼ıÀÚ¿¡ , ¸¦ Ãâ·Â )
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
 * È­Æó ´ÜÀ§ ÄÄ¸¶(,)¸¦ ¾ø¾Ø´Ù. (È­Æó´ÜÀ§ÀÎ ¼ıÀÚ¸¦ ÀÏ¹İ ¼ıÀÚ¸¸ Ç¥±âÇÒ¶§)
 * @param str ¹®ÀÚ¿­
 * @return String
 */
function del_comma(num)
{
	var quote = /,/g;
	return num.replace(quote,"");
}

/**
 * ¼ıÀÚ 1~9ÀÌÇÏÀÏ °æ¿ì 01~09·Î "0"À» Ãß°¡ 
 * @return 0x Å¸ÀÔ 
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
		alert("¼ıÀÚ¸¸ ÀÔ·Â°¡´ÉÇÕ´Ï´Ù");
		val.value=cnt;
		val.focus();
		return false;
	}

}
/**
 * ºñ±³ÇÒ ¹®ÀÚ¿­ ÆĞÅÏ ¼±ÅÃ
 * Âü°í ¾àÀÚ = ÇÑ±Û : h, ¿µ¹® : e , ¼ıÀÚ : n, _(¾ğ´õ¹ö) : u, -(ÇÏÀÌÇÂ) : p
 * 
 * @param String select_pattern ºñ±³ÇÒ ¹®ÀÚ¿­ ÆĞÅÏ ¼±ÅÃ
 * @return String str ºñ±³ÇÒ ¹®ÀÚ¿­
 */
function str_pattern_chk(select_pattern,str)
{
	var pattern;

	switch(select_pattern){
		case 'h':	/* ÇÑ±ÛÀÎÁö °Ë»ç (ÀÚÀ½, ¸ğÀ½¸¸ ÀÖ´Â ÇÑ±ÛÀº ºÒ°¡) */
		pattern = /([^°¡-ÆR\x20])/i;
		break;	
		case 'h1':	/* ÇÑ±ÛÀÎÁö °Ë»ç2 (ÀÚÀ½, ¸ğÀ½¸¸ ÀÖ´Â ÇÑ±Ûµµ °¡´É) */
		pattern = /([^°¡-ÆR¤¡-¤¾¤¿-¤Ó\x20])/i;
		break;	
		case 'e':	/* ¿µ¹®ÀÚ °Ë»ç(´ë¼Ò¹®ÀÚ) */
		pattern = /(^[a-zA-Z]+$)/;
		break;	
		case 'en':	/* ¿µ¹®ÀÚ¿Í ¼ıÀÚ °Ë»ç */
		pattern = /(^[a-zA-Z0-9]+$)/;
		break;	
		case 'enu':	/* ¿µ¹®ÀÚ¿Í ¼ıÀÚ ±×¸®°í _ °Ë»ç */
		pattern = /(^[a-zA-Z0-9\_]+$)/;
		break;	
		case 'enup':	/* Ã¹¹®ÀÚ´Â ¿µ¹®ÀÌ°í ¿µ¹®,¼ıÀÚ,_,-¸¸ Çã¿ë (¾ÆÀÌµğ ÀÌ¿ë) */
		pattern = /(^([a-zA-Z]+)([a-zA-Z0-9\_\-]+$))/;
		break;	
		case 'enup2':	/* Ã¹¹®ÀÚ´Â ¿µ¹®ÀÌ°í ¿µ¹®,¼ıÀÚ,_,-¸¸ Çã¿ë (¾ÆÀÌµğ ÀÌ¿ë) */
		pattern = /(^[a-zA-Z0-9\_\-\#\~]+$)/;
		break;	
		case 'enhup':	/* ¿µ¹®, ¼ıÀÚ, ÇÑ±Û, _, - °Ë»ç */
		pattern = /(^[a-zA-Z0-9\_\-\°¡-ÆR\x20]+$)/i;
		break;
		case 'tel':	/* ¼ıÀÚ ±×¸®°í - °Ë»ç */
		pattern = /(^[0-9\-]+$)/;
		break;	
		case 'us_no_chk':	/* ¼ıÀÚ °Ë»ç */
		pattern = /(^[0-9]+$)/;
		break;	
	}
	
	if (!pattern.test(str)) {
		return false;
    }else{
		return true;
	}
}

// ¿µ¹®, ¼ıÀÚ, ºóÄ­, ¾ğ´õ¹Ù Ã¼Å©
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
				alert("E-mail ÁÖ¼Ò°¡ Á¤È®ÇÏÁö ¾Ê½À´Ï´Ù.\n @ ¿Í . À» È®ÀÎÇÏ½Ê½Ã¿À");
			}
			return false;
		}
		var user=matchArray[1];
		var domain=matchArray[2];	
		if (user.match(userPat)==null) {
			alert("¸ŞÀÏ ¾ÆÀÌµğ°¡ Á¤È®ÇÑ °Í °°Áö ¾Ê½À´Ï´Ù.");
			return false;
		}
		var IPArray=domain.match(ipDomainPat);
		if (IPArray!=null) {
			for (var i=1;i<=4;i++) {
				if (IPArray[i]>255) {
					alert("IP°¡ Á¤È®ÇÏÁö ¾Ê½À´Ï´Ù!");
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
				alert("E-mail ÁÖ¼Ò°¡ Á¤È®ÇÏÁö ¾Ê½À´Ï´Ù.\n @ ¿Í . À» È®ÀÎÇÏ½Ê½Ã¿À");
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
				alert("E-mail ÁÖ¼Ò°¡ Á¤È®ÇÏÁö ¾Ê½À´Ï´Ù.\n @ ¿Í . À» È®ÀÎÇÏ½Ê½Ã¿À");
			}
			return false;
		}	
		if (domArr[domArr.length-1].length==3 && len<2) {
			if(lang=='en') {
				alert("Please enter the valid email address.");
			} else {
				alert("E-mail ÁÖ¼Ò°¡ Á¤È®ÇÏÁö ¾Ê½À´Ï´Ù.\n @ ¿Í . À» È®ÀÎÇÏ½Ê½Ã¿À");
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
	imgwin.document.write("<title>È®´ë»çÁø</title>\n"); 

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
 * ÀüÃ¼ ¹®ÀÚ¿­ ¼ö ¸®ÅÏ
 * @param String str ÀÔ·ÂµÈ ¹®ÀÚ¿­
 * @return String nToLen ¹®ÀÚ¿­ ¼ö
 */ 
function count_len(str) 
{
   var tmpcur = "";
   var tmpbak = "";
   var nToLen = 0;		//ÀÔ·ÂµÈ ¹®ÀÚ¿­ ¼ö
   var tmp;

   for(var i=0; i < str.length; i++) {
   
	  tmpbak = tmpcur;
	  tmpcur = str.charAt(i);
	  nToLen += one_char_byte(tmpcur,tmpbak);
   }
   return nToLen;
}

/**
 * ¹®ÀÚ 1 char byte ¼ö ¸®ÅÏ
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

//°ßÀû¼­ ¿äÃ» ÆË¾÷(¿µ¾î)
function open_order_document(url,qid){
	window.open(url+"?qid="+qid,"ORDER_INFO","width=880,height=700,scrollbars=yes");
}
function open_invoice_document(url,oid){
	window.open(url+"?oid="+oid,"ORDER_INVOICE_INFO","width=880,height=700,scrollbars=yes");
}