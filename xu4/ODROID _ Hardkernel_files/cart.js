var openwin;

function PayMethodShow(Obj)
{
 if(Obj=='escrow' && parseInt(document.order_step1.pay_amount.value)<100000){
		alert("10���� �̻� ������ Escrow ���񽺸� ��� �ϽǼ� �ֽ��ϴ�");
		document.order_step1.pay_method[2].checked=false;
		return;
	}else{
		document.all('normal').style.display = 'none';
		document.all('escrow').style.display = 'none';
		document.all('bank').style.display = 'none';
		document.all(Obj).style.display = 'inline';
	}
}

// �����ȣ â
function win_zip(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2)
{
    url = "/bbs/zip.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
    window.open(url, "winZip", "left=50,top=50,width=402,height=455,scrollbars=0");
}


// �����ȣ â
function win_zip_new(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2) {
    url = "/main/shop/zip.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
    window.open(url, "winZip", "left=50,top=50,width=402,height=455,scrollbars=0");
}


//��ٱ��� ���
function Cart(g_code, cnt){
	var f = document.order_frm;
	f.g_code.value=g_code;
	f.cnt.value=cnt;
	f.submit();
}

function CartPrdtCntChange(g_code){
	var f = document.order_frm;
	var cnt = eval("document.all."+g_code+"_cnt.value");
	f.g_code.value=g_code;
	f.cnt.value=cnt;
	f.submit();
}


//��ٱ��� ��� 
function Cart_ext(g_code, cnt, opt_nm){
	var f = document.order_frm;
	f.g_code.value=g_code;
	f.opt_nm.value=opt_nm;
	f.cnt.value=cnt;
	f.submit();
}

function CartPrdtCntChange_ext(g_code, opt_nm, idx){
	var f = document.order_frm;
	var cnt = eval("document.all."+g_code+idx+".value");
	f.g_code.value=g_code;
	f.opt_nm.value=opt_nm;
	f.cnt.value=cnt;
	f.submit();
}



function tel_chk(tel){
	if(str_pattern_chk('tel',tel.value)==false && trim(tel.value)!=""){
		alert("���� �� - �� �Է� �����մϴ�");
		tel.focus();
		return false;
	}
}


function only_no_chk(val){
	if(str_pattern_chk('us_no_chk',val.value)==false && trim(val.value)!=""){
		return false;
	}

}
function only_no_chk2(val){

	if(str_pattern_chk('us_no_chk',val.value)==false && trim(val.value)!=""){
		alert("Enter only numbers");
		val.focus();
		return false;
	}

}


function mail_chk(mail,lang){
	if(emailCheck(mail.value,lang)==false){
		mail.focus();
		return false;
	}
}


function Order(g_code, cnt){
	location.href="./order_step1.php?g_code="+g_code+"&cnt="+cnt;
}


function Order_paypal(g_code, cnt){
	location.href="./paypal_order_step1.php?g_code="+g_code+"&cnt="+cnt;
}



//�ֹ���,������ ���� ���� �ϱ�(������뽺ũ��Ʈ)
function copyBuyer()
{
	if(document.all('os_same').checked == true)
	{
		var frm = document.order_step1;

		frm.s_name.value = frm.o_name.value;
		frm.s_tel.value = frm.o_tel.value;
		frm.s_hp.value = frm.o_hp.value;
		frm.s_email.value = frm.o_email.value;
		frm.s_zip.value = frm.o_zip.value;
		//frm.s_zip2.value = frm.o_zip2.value;
		frm.s_addr1.value = frm.o_addr1.value;
		frm.s_addr2.value = frm.o_addr2.value;
	}
}

//�ֹ���,������ ���� ���� �ϱ�
function copyBuyerInfo()
{
	if(document.all('os_same').checked == true)
	{
		var frm = document.order_step1;

		frm.s_name.value = frm.buyername.value;
		frm.s_tel.value = frm.o_tel.value;
		frm.s_hp.value = frm.buyertel.value;
		frm.s_email.value = frm.buyeremail.value;
		frm.s_zip.value = frm.o_zip.value;
		//frm.s_zip2.value = frm.o_zip2.value;
		frm.s_addr1.value = frm.o_addr1.value;
		frm.s_addr2.value = frm.o_addr2.value;
	}
}

function order_stmt(frm)
{
	var frm = document.order_step1;

	if(frm.buyername.value == "")
	{
		alert("�ֹ��ڸ��� �Է��ϼ���.");
		frm.buyername.focus();
		return false;
	}
	else if(tel_chk(frm.o_tel) == false)
	{
		frm.o_tel.focus();
		return false;
	}
	else if(frm.buyertel.value == "")
	{
		alert("�ֹ��� �޴�����ȣ�� �Է��ϼ���.");
		frm.buyertel.focus();
		return false;
	}
	else if(tel_chk(frm.buyertel) == false)
	{
		frm.buyertel.focus();
		return false;
	}
	else if(frm.buyeremail.value == "")
	{
		alert("�ֹ��� E-mail�� �Է��ϼ���.");
		frm.buyeremail.focus();
		return false;
	}
	else if(mail_chk(frm.buyeremail) == false)
	{
		frm.buyeremail.focus();
		return false;
	}
	else if(frm.o_zip.value == "" || frm.o_addr1.value == "" || frm.o_addr2.value == "")
	{
		alert("�ֹ��� �ּҸ� �Է��ϼ���.");
		//document.all('o_zip_btn').focus();
		return false;
	}
	else if(frm.s_name.value == "")
	{
		alert("�����ڸ��� �Է��ϼ���.");
		frm.s_name.focus();
		return false;
	}
	else if(frm.s_hp.value == "")
	{
		alert("������ �޴����� �Է��ϼ���.");
		frm.s_hp.focus();
		return false;
	}
	else if(frm.s_email.value == "")
	{
		alert("������ E-mail�� �Է��ϼ���.");
		frm.s_email.focus();
		return false;
	}
	else if(mail_chk(frm.s_email) == false)
	{
		frm.s_email.focus();
		return false;

	}
	else if(frm.s_zip.value == "" || frm.s_addr1.value == "" || frm.s_addr2.value == ""){
		alert("������ �ּҸ� �Է��ϼ���.");
		document.all('s_zip_btn').focus();
		return false;
	}

	var flag=0;
	var pay_method;
	for(j=0;j<frm.pay_method.length;j++){
		
		if(frm.pay_method[j].checked==true){
			pay_method = frm.pay_method[j].value;
			flag=1;
		}
	}
	if(flag==0){
		alert("���� ����� ������ �ּ���");
		return false;
	}

	if(pay_method == "Card"){
		if(frm.pay_user.value==""){
			alert("�����Ͻ� �� �̸��� �Է����ּ���");
			frm.pay_user.focus();
			return false;
		}

		frm.buyer.value = frm.pay_user.value;
		frm.gopaymethod.value = pay_method;
		frm.parentemail.value = frm.buyeremail.value;

		if(pay_inicis(frm)==false){
			return false;
		}
	}else if(pay_method == "bank"){		//�������� ��â���� ����Ÿ ó��
		if(frm.bank_info.value==""){
			alert("�Աݰ��¸� �������ּ���");
			frm.bank_info.focus();
			return false;
		}else if(frm.bank_user.value==""){
			alert("�Ա��Ͻ� �� �̸��� �Է����ּ���");
			frm.bank_user.focus();
			return false;
		}
 
		frm.buyer.value = frm.bank_user.value;

	}else if(pay_method == "escrow"){		//����ũ�δ� ��â���� ����Ÿ ó��
		if(frm.escrow_user.value==""){
			alert("����ũ�η� �Ա��Ͻ� �� �̸��� �Է����ּ���");
			frm.escrow_user.focus();
			return false;
		}

		frm.buyer.value = frm.escrow_user.value;

	}
}


//������ ���� ó��
function paypal_order_stmt(frm)
{
	var frm = document.order_step1;

	if(frm.o_country.value == ""){
		alert("Please selecsst your country");
		frm.o_country.focus();
		return false;
	}else if(frm.o_first_name.value == ""){
		alert("Please enter your last name");
		frm.o_first_name.focus();
		return false;

	}else if(frm.o_last_name.value == ""){
		alert("Please enter your last name");
		frm.o_last_name.focus();
		return false;

	}
	else if(frm.o_addr1.value == ""){
		alert("Please enter your contact address");
		frm.o_addr1.focus();
		return false;

	}
	else if(frm.o_city.value == "")	{
		alert("Please enter your city");
		frm.o_city.focus();
		return false;

	}
	else if(frm.o_zip.value == ""){
		alert("Please enter your Postal code");
		frm.o_zip.focus();
		return false;
	}
	else if(frm.o_hp.value == ""){
		alert("Please enter your Telephone");
		frm.o_hp.focus();
		return false;
	}
	else if(only_no_chk(frm.o_hp) == false)	{
		alert("Enter only numbers");
		frm.o_hp.focus();
		return false;
	}
	else if(frm.o_email.value == ""){
		alert("Please enter the e-mail");
		frm.o_email.focus();
		return false;
	}
	else if(mail_chk(frm.o_email) == false)	{
		frm.o_email.focus();
		return false;
	}
	/*
	}else if(frm.o_last_name.value != "" && str_pattern_chk('enup2',frm.o_last_name.value)==false){
		alert("Please enter your last name");
		frm.o_last_name.focus();
		frm.o_last_name.value="";
		return false;

	}else if(frm.o_addr1.value != "" && str_pattern_chk('enup2',frm.o_addr1.value)==false){
		alert('English only please enter...');
		frm.o_addr1.focus();
		frm.o_addr1.value="";
		return false;

	}else if(frm.o_city.value != "" && str_pattern_chk('enup2',frm.o_city.value)==false){
		alert('English only please enter...');
		frm.o_city.focus();
		frm.o_city.value="";
		return false;
	}else if(frm.o_first_name.value != "" && str_pattern_chk('enup2',frm.o_first_name.value)==false){
		alert('English only please enter...');
		frm.o_first_name.focus();
		frm.o_first_name.value="";
		return false;


	else if(only_no_chk(frm.o_zip) == false)
	{
		alert("Enter only numbers");
		frm.o_zip.focus();
		return false;
	}

*/
}

//������ ���� ó��
function paypal_order_stmt_new(frm) {
	var frm = document.order_step1;
	if(frm.s_email.value == ""){
		alert("Please enter the e-mail");
		frm.s_email.focus();
		return false;
	}
	if(mail_chk(frm.s_email) == false)	{
		alert("Please check the e-mail");
		frm.s_email.focus();
		return false;
	}
	if(frm.s_first_name.value == ""){
		alert("Please enter your first name");
		frm.s_first_name.focus();
		return false;

	}
	if(frm.s_last_name.value == ""){
		alert("Please enter your last name");
		frm.s_last_name.focus();
		return false;

	}
	if(frm.s_hp.value == ""){
		alert("Please enter your Telephone");
		frm.s_hp.focus();
		return false;
	}
	if(only_no_chk(frm.s_hp) == false)	{
		alert("Enter only numbers");
		frm.s_hp.focus();
		return false;
	}

	if(frm.s_country.value == ""){
		alert("Please select your country");
		frm.s_country.focus();
		return false;
	}
	
	if(frm.s_addr1.value == ""){
		alert("Please enter your contact address");
		frm.s_addr1.focus();
		return false;

	}
	if(frm.s_city.value == "")	{
		alert("Please enter your city");
		frm.s_city.focus();
		return false;

	}
	if(frm.s_zip.value == ""){
		alert("Please enter your Postal code");
		frm.s_zip.focus();
		return false;
	}
	

	if(frm.o_email.value == ""){
		alert("Please enter the e-mail");
		frm.o_email.focus();
		return false;
	}
	if(mail_chk(frm.o_email) == false)	{
		alert("Please check the e-mail");
		frm.o_email.focus();
		return false;
	}
	if(frm.o_first_name.value == ""){
		alert("Please enter your first name");
		frm.o_first_name.focus();
		return false;

	}
	if(frm.o_last_name.value == ""){
		alert("Please enter your last name");
		frm.o_last_name.focus();
		return false;

	}
	if(frm.o_hp.value == ""){
		alert("Please enter your Telephone");
		frm.o_hp.focus();
		return false;
	}
	if(only_no_chk(frm.o_hp) == false)	{
		alert("Enter only numbers");
		frm.o_hp.focus();
		return false;
	}

	if(frm.o_country.value == ""){
		alert("Please select your country");
		frm.o_country.focus();
		return false;
	}
	
	if(frm.o_addr1.value == ""){
		alert("Please enter your contact address");
		frm.o_addr1.focus();
		return false;

	}
	if(frm.o_city.value == "")	{
		alert("Please enter your city");
		frm.o_city.focus();
		return false;

	}
	if(frm.o_zip.value == ""){
		alert("Please enter your Postal code");
		frm.o_zip.focus();
		return false;
	}
	
	return true;
}



function order_next_step(frm)
{
	var frm = document.order_step1;

	if(frm.o_name.value == "")
	{
		alert("�ֹ��ڸ��� �Է��ϼ���.");
		frm.o_name.focus();
		return false;
	}
	else if(frm.o_tel.value == "" && frm.o_hp.value == "")
	{
		alert("�ֹ��� ����ó�� �Է��ϼ���.");
		frm.o_tel.focus();
		return false;
	}
	else if(frm.o_email.value == "")
	{
		alert("�ֹ��� E-mail�� �Է��ϼ���.");
		frm.o_email.focus();
		return false;
	}
	else if(frm.o_zip.value == "" || frm.o_addr1.value == "" || frm.o_addr2.value == "")
	{
		alert("�ֹ��� �ּҸ� �Է��ϼ���.");
		//document.all('o_zip_btn').focus();
		return false;
	}
	else if(frm.s_name.value == "")
	{
		alert("�����ڸ��� �Է��ϼ���.");
		frm.s_name.focus();
		return false;
	}
	else if(frm.s_tel.value == "" && frm.s_hp.value == "")
	{
		alert("������ ����ó�� �Է��ϼ���.");
		frm.s_tel.focus();
		return false;
	}
	else if(frm.s_email.value == "")
	{
		alert("������ E-mail�� �Է��ϼ���.");
		frm.s_email.focus();
		return false;
	}else if(frm.s_zip.value == "" || frm.s_addr1.value == "" || frm.s_addr2.value == ""){
		alert("������ �ּҸ� �Է��ϼ���.");
		document.all('s_zip_btn').focus();
		return false;
	}

	var flag=0;
	var pay_method;
	for(j=0;j<frm.pay_method.length;j++){
		
		if(frm.pay_method[j].checked==true){
			pay_method = frm.pay_method[j].value;
			flag=1;
		}
	}
	if(flag==0){
		alert("���� ����� ������ �ּ���");
		return false;
	}

	if(pay_method == "card"){
		if(frm.pay_user.value==""){
			alert("�����Ͻ� �� �̸��� �Է����ּ���");
			frm.pay_user.focus();
			return false;
		}

		frm.target="order_proc";
		frm.action="order_step2.php";
		frm.submit();
	}else if(pay_method == "bank"){		//�������� ��â���� ����Ÿ ó��
		if(frm.bank_info.value==""){
			alert("�Աݰ��¸� �������ּ���");
			frm.bank_info.focus();
			return false;
		}else if(frm.bank_user.value==""){
			alert("�Ա��Ͻ� �� �̸��� �Է����ּ���");
			frm.bank_user.focus();
			return false;
		}
		frm.target="_self";
		frm.action="order_step2.php";
		frm.submit();		
	}else if(pay_method == "escrow"){		//����ũ�δ� ��â���� ����Ÿ ó��
		if(frm.escrow_user.value==""){
			alert("����ũ�η� �Ա��Ͻ� �� �̸��� �Է����ּ���");
			frm.escrow_user.focus();
			return false;
		}
		frm.target="_self";
		frm.action="order_step2.php";
		frm.submit();		
	}
}

function order_final_step()
{
	var frm = document.payForm;
	var f = document.order_step1;

	frm.buyeremail.value = f.o_email.value;

	for(j=0;j<f.pay_method.length;j++){
		
		if(f.pay_method[j].checked==true){
			frm.pay_method.value = f.pay_method[j].value;
		}
	}

	if(frm.pay_method.value=="card"){
		frm.buyer.value = f.pay_user.value;

	}else if(frm.pay_method.value=="bank"){
		frm.buyer.value = f.bank_user.value;
	}else if(frm.pay_method.value=="escrow"){
		frm.buyer.value = f.escrow_user.value;
	}


	if(frm.shop_mode.value == "TEST")
	{
		if(frm.pay_method.value == "card")
		{
			frm.action = "http://pg.dacom.net:7080/card/cardAuthAppInfo.jsp";
		}
		else if(frm.pay_method.value == "iche")
		{
			frm.action = "http://pg.dacom.net:7080/transfer/transferSelectBank.jsp";
		}
		else if(frm.pay_method.value == "hp")
		{
			frm.action = "http://pg.dacom.net:7080/wireless/wirelessAuthAppInfo1.jsp";
		}
		else if(frm.pay_method.value == "ebank")
		{
			frm.action = "http://pg.dacom.net:7080/cas/casRequestSA.jsp";
		}
		else
		{
			return false;
		}

		if(frm.action != "")
		{
			if(confirm("���� �Ͻðڽ��ϱ�?"))
			{
				document.all('PG_BG_LAYER').style.display = "inline";
				document.all('PG_LAYER').style.display = "inline";
				frm.submit();
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
	else
	{
		if(frm.pay_method.value == "card")
		{
			frm.action = "http://pg.dacom.net/card/cardAuthAppInfo.jsp";
		}
		else if(frm.pay_method.value == "iche")
		{
			frm.action = "http://pg.dacom.net/transfer/transferSelectBank.jsp";
		}
		else if(frm.pay_method.value == "hp")
		{
			frm.action = "http://pg.dacom.net/wireless/wirelessAuthAppInfo1.jsp";
		}
		else if(frm.pay_method.value == "ebank")
		{
			frm.action = "http://pg.dacom.net/cas/casRequestSA.jsp";
		}
		else
		{
			return false;
		}

		if(frm.action != "")
		{
			if(confirm("���� �Ͻðڽ��ϱ�?"))
			{
				document.all('PG_BG_LAYER').style.display = "inline";
				document.all('PG_LAYER').style.display = "inline";
				frm.submit();
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
}

function PG_CLOSE()
{
	if(confirm("����â�� �����ðڽ��ϱ�?"))
	{
		document.all('PG_LAYER').style.display = "none";
		document.all('PG_BG_LAYER').style.display = "none";
	}
	else
	{
		return false;
	}

}

function pay_inicis(frm)
{
	// MakePayMessage()�� ȣ�������ν� �÷������� ȭ�鿡 ��Ÿ����, Hidden Field
	// �� ������ ä������ �˴ϴ�. �Ϲ����� ���, �÷������� ����ó���� �����ϴ� ����
	// �ƴ϶�, �߿��� ������ ��ȣȭ �Ͽ� Hidden Field�� ������ ä��� �����ϸ�,
	// ���� �������� INIsecureresult.php�� �����Ͱ� ����Ʈ �Ǿ� ���� ó������ �����Ͻñ� �ٶ��ϴ�.

	if(document.order_step1.clickcontrol.value == "enable")
	{
		
		if(document.order_step1.goodname.value == "")  // �ʼ��׸� üũ (��ǰ��, ��ǰ����, �����ڸ�, ������ �̸����ּ�, ������ ��ȭ��ȣ)
		{
			alert("��ǰ���� �������ϴ�. �ʼ��׸��Դϴ�.");
			return false;
		}
		else if(document.order_step1.buyername.value == "")
		{
			alert("�����ڸ��� �������ϴ�. �ʼ��׸��Դϴ�.");
			return false;
		} 
		else if(document.order_step1.buyeremail.value == "")
		{
			alert("������ �̸����ּҰ� �������ϴ�. �ʼ��׸��Դϴ�.");
			return false;
		}
		else if(document.order_step1.buyertel.value == "")
		{
			alert("������ ��ȭ��ȣ�� �������ϴ�. �ʼ��׸��Դϴ�.");
			return false;
		}
		else if( ( navigator.userAgent.indexOf("MSIE") >= 0 || navigator.appName == 'Microsoft Internet Explorer' ) &&  (document.INIpay == null || document.INIpay.object == null) )   
		{
			alert("\n�̴����� �÷����� 128�� ��ġ���� �ʾҽ��ϴ�. \n\n������ ������ ���Ͽ� �̴����� �÷����� 128�� ��ġ�� �ʿ��մϴ�. \n\n�ٽ� ��ġ�Ͻ÷��� Ctrl + F5Ű�� �����ðų� �޴��� [����/���ΰ�ħ]�� �����Ͽ� �ֽʽÿ�.");
			return false;
		}
		else
		{
			/******
			 * �÷������� �����ϴ� ���� �����ɼ��� �̰����� ������ �� �ֽ��ϴ�.
			 * (�ڹٽ�ũ��Ʈ�� �̿��� ���� �ɼ�ó��)
			 */
			
						 
			if (MakePayMessage(frm))
			{
				disable_click();
				openwin = window.open("childwin.html","childwin","width=299,height=149");		
				return true;
			}
			else
			{
				if( IsPluginModule() )     //plugin type check
   				{
					alert("������ ����ϼ̽��ϴ�.");
					return false;
				}
			}
		}
	}
	else
	{
		return false;
	}
}

function enable_click()
{
	document.order_step1.clickcontrol.value = "enable"
}

function disable_click()
{
	document.order_step1.clickcontrol.value = "disable"
}

function focus_control()
{
	if(document.order_step1.clickcontrol.value == "disable")
		openwin.focus();
}