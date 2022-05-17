// 차트가 그려질 캔버스
const pc = document.getElementById("pieChart");
const bc = document.getElementById("barChart");
const lc = document.getElementById("lineChart");

// 차트의 버튼
const btnPie = document.getElementById("pie");
const btnBar = document.getElementById("bar");
const btnLine = document.getElementById("line");

// ajax 실행값이 담길 변수
let ajax1;
let ajax2;
let ajax3;

// 호출 여부를 판단하는 변수
let tf1;
let tf2;
let tf3;

// ※pie 차트
$("#pie").click(function() {
	if (!tf1 && !ajax1) {

		//url에서 json값을 가져옴
		ajax1 = $.ajax({
			url: 'http://dev.openmate.com:8089/ca/api/sales-info?zonCd=04389&zonDivsCd=RNZP&idkdMclsCd=A01',
			type: 'get',
			dataType: 'json',
			success: function(result) {
				// ageChartData는 string 타입이므로 배열형태로 다시 담아줌
				const arr = result.data.ageChartData.split(",");

				const data = {
					// 차트 상단에 범례
					labels: [
						'20대 이하',
						'30대',
						'40대',
						'50대',
						'60대 이상',
					],
					datasets: [{
						// 나타낼 데이터
						data: [arr[0], arr[1], arr[2], arr[3], arr[4]],

						// 데이터별 색
						backgroundColor: [
							'rgb(113, 139, 174)',
							'rgb(255, 202, 100)',
							'rgb(238, 142, 148)',
							'rgb(185, 190, 196)',
							'rgb(67, 78, 106)'
						],

						// hover 이벤트
						hoverOffset: 8
					}]
				};

				// 차트 세팅값 정의
				const config = {
					type: 'doughnut',
					data: data,
					options: {
						responsive: false
					}
				};

				// 차트 생성
				var myChart = new Chart(pc, config);

				btnPie.innerText = "Pie Chart Close!"

				tf1 = true;
				console.log("pie1");
			}
		});
	}

	// 차트 감추기
	else if (ajax1 && tf1) {

		let btnPie = document.getElementById("pie");
		btnPie.innerText = "Pie Chart Open!"

		pc.style.display = 'none'

		tf1 = false;

		console.log("pie2");
	}
	
	// 차트 보이기
	else if (ajax1) {
		pc.style.display = 'inline';
		btnPie.innerText = "Pie Chart Close!"
		tf1 = true;
		console.log("pie display chk");
	}
});

// ※bar 차트
$("#bar").click(function() {
	if (!tf2 && !ajax2) {

		ajax2 = $.ajax({
			url: 'http://dev.openmate.com:8089/ca/api/sales-info?zonCd=04389&zonDivsCd=RNZP&idkdMclsCd=A01',
			type: 'get',
			dataType: 'json',
			success: function(result) {
				const arr = result.data.ageChartData.split(",");

				const data = {
					labels: [
						'20대 이하',
						'30대',
						'40대',
						'50대',
						'60대 이상',
					],
					datasets: [{
						label: 'label',
						data: [arr[0], arr[1], arr[2], arr[3], arr[4]],
						backgroundColor: [
							'rgb(113, 139, 174)',
							'rgb(255, 202, 100)',
							'rgb(255, 142, 148)',
							'rgb(185, 190, 196)',
							'rgb(67, 78, 106)'
						],
						hoverOffset: 8
					}]
				}

				const config = {
					type: 'bar',
					data: data,
					options: {
						responsive: false
					}
				};

				var myChart = new Chart(bc, config);
				btnBar.innerText = "Bar Chart Close!"

				tf2 = true;
				console.log("bar1");
			}
		});
	}
	else if (ajax2 && tf2) {
		btnBar.innerText = "Bar Chart Open!"

		bc.style.display = 'none'
		tf2 = false;
		console.log("bar2");
	}

	else if (ajax2) {
		bc.style.display = 'inline';
		btnBar.innerText = "Bar Chart Close!"
		tf2 = true;
		console.log("bar display chk");
	}
});

// ※line 차트
$("#line").click(function() {
	if (!tf3 && !ajax3) {

		ajax3 = $.ajax({
			url: 'http://dev.openmate.com:8089/ca/api/sales-info?zonCd=04389&zonDivsCd=RNZP&idkdMclsCd=A01',
			type: 'get',
			dataType: 'json',
			success: function(result) {
				const arr = result.data.ageChartData.split(",");

				let speedData = {
					labels: [
						'20대 이하',
						'30대',
						'40대',
						'50대',
						'60대 이상',
					],
					datasets: [{
						label: '연령별 분포',
						data: [arr[0], arr[1], arr[2], arr[3], arr[4]],
						tension: 0.4,
						fill: false,
						borderColor: '#33B5B5',
						backgroundColor: 'transparent',
						pointBorderColor: '#F73788',
						pointBackgroundColor: '#ffffff',
						pointStyle: 'circle',
						pointRadius: 10,
						pointHoverRadius: 15,
						pointBorderWidth: 4,
					}]
				};

				let myChart = new Chart(lc, {
					type: 'line',
					data: speedData,
					options: {
						responsive: false
					}
				});

				btnLine.innerText = "Line Chart Close!"
				tf3 = true;
				console.log("line1");
			}
		});
	}
	else if (ajax3 && tf3) {
		btnLine.innerText = "Line Chart Open!"
		lc.style.display = 'none'
		tf3 = false;
		console.log("line2");
	}

	else if (ajax3) {
		lc.style.display = 'inline';
		btnLine.innerText = "Line Chart Close!"
		tf3 = true;
		console.log("line display chk");
	}
});
