/************************************************
 * index.js
 * Created at 2019. 1. 28. 오후 4:17:59.
 *
 * @author bumil
 ************************************************/

/*
 * 네비게이션 바에서 selection-change 이벤트 발생 시 호출.
 * 선택된 Item 값이 저장된 후에 발생하는 이벤트.
 */

/*2019-01-30 작성*/
function onNav1SelectionChange( /* cpr.events.CSelectionEvent */ e) {
	/** 
	 * @type cpr.controls.NavigationBar
	 */
	var nav1 = e.control;
	var item = nav1.getSelectionLast();
	var itemUrl = './' + item.value + '.clx';
	var itemParentUrl = item.parentValue;

	if (itemParentUrl != "" && itemUrl != "") {
		console.log(itemParentUrl);
		//메뉴에서 선택한 value url controller에 던지기
		location.href = itemUrl;
	}
	//메뉴에서 선택된 아이템을 모두 선택 해제
	nav1.clearSelection(false);

	/*TODO*/
	//서브미션을 통해 데이터베이스와 연결하여 데이터셋(ds1)에 데이터 갱신 및 조회하기. -> OK

	//데이터베이스에서 가져온 메뉴 테이블 정보로 페이지 매핑하기. -> OK

	//url이 매핑 되지 않는 메뉴 에러 처리하기.

	//gitHub에 소스 업로드, 연동하기.
		
	/*참고 및 공부 소스*/

	/*2019-01-30 작성*/
	// 소스에서 jquery min.js 파일을 import 하고 ajax로도 데이터를 주고 받을 수 있다.
	//	$.ajax({
	//		type: "GET",
	//		url: './'+newUrl,
	//		error: function() {
	//			alert('통신실패!!');
	//		},
	//		success: function() {
	//			alert("통신성공");
	//			//location.href='./'+newUrl;
	//		}
	//	});
}