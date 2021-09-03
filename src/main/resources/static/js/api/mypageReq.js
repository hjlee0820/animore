/**
 * 
 */
 //즐겨찾기
	const $myFavorite = document.querySelector('a[href="/mypage/mypageFavorites"]');
	$myFavorite.addEventListener('click',e=>{
	e.preventDefault();
	
	const URL = `/mypage/mypageFavorites`;
	
	request.get(URL)
	.then(res=>res.json())
	.then(res=>{
		if(res.rtcd == '00'){
			//성공로직처리
			console.log(res);
			const data = res.data;
			document.querySelector('.favorite__table').innerHTML = data;
		}else{
			throw new Error(res.rtmsg);
		}
	})
	.catch(err=>{
		//오류로직 처리
		console.log (err.message);
	});

});
 
 //내가 쓴 리뷰
const myReview =  document.querySelector('.mypage__myReviewBtn')

function review(){
  const URL = `/mypage/review`;
													 	
	request.get(URL)
			.then(res=>res.json())
			.then(res=>{
					if(res.rtcd == "00"){
							//성공로직처리
							const data = res.data;
							//리뷰목록갱신
							refreshReview(data);
					}else{
							throw new Error(res.rtmsg);
					}
			})
			.catch(err=>{
					//오류로직 처리
					console.log(err.message);
					alert(err.message);
			});
}

function refreshReview(data){
  let html= '';
  html += `<h2>내가 쓴 리뷰</h2>`;
  html += `<hr>`;
  html += `<table class="review_table">`;
  html += `<tr>`;
  html += `  <th class="review__cell">번호</span>`;
  html += `  <th class="review__cell">업체명</span>`;
  html += `  <th class="review__cell">내평점</span>`;
  html += `  <th class="review__cell">리뷰내용</span>`;
  html += `  <th class="review__cell">작성일</span>`;
  html += `</tr>`;
  data.forEach(review => {
    html += `<tr>`;
    html += `    <td class="review__cell">번호</span>`;
    html += `    <td class="review__cell">${review.bname}</span>`;
    html += `    <td class="review__cell">${review.rscore}</span>`;
    html += `    <td class="review__cell">${review.rcontent}</span>`;
    html += `    <td class="review__cell">${review.rvcdate}</span>`;
    html += `</tr>`;
  });
  
  document.querySelector('.mypage_content_container').innerHTML = html;

}

myReview.addEventListener('click',review);



//내가 쓴 글
const $mypostBtn = document.querySelector('.mypage__mypostBtn');
let $contents = document.querySelector('.mypage_content_container');

$mypostBtn.addEventListener('click',e=>{
//alert('내글보기버튼 클릭');
const URL =`/mypage/mypost`;
	console.log("url:",URL);
	
request.get(URL)
      .then(res=>res.json())
      .then(res=>{
        if(res.rtcd == '00'){
          const data = res.data;
          let html ='';
          html += `<h2 class='mypage_content_title'>내가 쓴 글</h2>`;
          html += `<hr>`;
          html += `<table class="mypage__post"> `;
          html += `    <tr> `;
          html += `      <th class="mypost__cell mypost__bcategory">카테고리</th> `;
          html += `      <th class="mypost__cell mypost__btitle">제목</th> `;
          html += `      <th class="mypost__cell mypost__udate">작성일</th> `;
          html += `      <th class="mypost__cell mypost__bhit">조회수</th> `;
          html += `    </tr> `;
          data.forEach(post =>{
              html += `<tr class="mypost__container"> `;
              html += `    <td class="mypost__cell mypost__bcategory ">${post.bcategory}</td> `;
              html += `    <td class="mypost__cell mypost__btitle" ><a href="/board/post/${post.bnum}" >${post.btitle}</a></td> `;
              html += `    <td class="mypost__cell mypost__udate" >${post.bcdate}</td> `;
              html += `    <td class="mypost__cell mypost__bhit" >${post.bhit}</td> `;
              html += `</tr> `;
          });
          html += `</table> `;
          $contents.innerHTML = html;
          const $bcategorys = document.querySelectorAll('.mypost__bcategory');
for(let i =0; i<$bcategorys.length; i++){
  if($bcategorys[i].textContent == 'Q') $bcategorys[i].textContent = 'Q&A';
  if($bcategorys[i].textContent == 'P') $bcategorys[i].textContent = '내새끼보세요';
  if($bcategorys[i].textContent == 'F') $bcategorys[i].textContent = '자유게시판';
  if($bcategorys[i].textContent == 'M') $bcategorys[i].textContent = '벼룩시장';
};
        }else{
          throw new Error(res.rtmsg);
        }
      })
      .catch(err=>{
		//오류로직 처리
		console.log (err.message);
		});
});



//안될시 타게팅만 새로 해주면 됨
//내가쓴댓글
const $mypageReplyMenu = document.querySelector('a[href="/mypage/mypageReply"]');
	$mypageReplyMenu.addEventListener('click',e=>{
	e.preventDefault();
	
	const URL = `/mypage/mypageReply`;
	
	request.get(URL)
	.then(res=>res.json())
	.then(res=>{
		if(res.rtcd == '00'){
			//성공로직처리
			console.log(res);
			const data = res.data;
			document.querySelector('.mypage_content_container').innerHTML = data;
		}else{
			throw new Error(res.rtmsg);
		}
	})
	.catch(err=>{
		//오류로직 처리
		console.log (err.message);
	});

});

//회원탈퇴
const $mypageDelMenu = document.querySelector('a[href="/mypage/mypageDel"]');
	$mypageDelMenu.addEventListener('click',e=>{
	e.preventDefault();
	
	const URL = `/mypage/mypageDel`;
	
	request.get(URL)
	.then(res=>res.json())
	.then(res=>{
		if(res.rtcd == '00'){
			//성공로직처리
			console.log(res);
			const data = res.data;
			document.querySelector('.mypage_content_container').innerHTML = data;
		}else{
			throw new Error(res.rtmsg);
		}
	})
	.catch(err=>{
		//오류로직 처리
		console.log (err.message);
	});

});
