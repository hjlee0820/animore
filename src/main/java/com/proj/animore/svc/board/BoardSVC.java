package com.proj.animore.svc.board;


import java.util.List;

import com.proj.animore.dto.board.BoardDTO;
import com.proj.animore.dto.board.BoardReqDTO;
import com.proj.animore.dto.board.SearchDTO;

public interface BoardSVC {
	
	//게시글 등록
	BoardReqDTO addBoard(String id, BoardDTO boardDTO);
	
	//답글작성
	int reply(String id,BoardDTO boardDTO);
	
	//게시글 조회(by bnum)
	BoardReqDTO findBoardByBnum(Integer bnum);
	
	//조회수 증가
	void upBhit(Integer bnum);
		
	//게시글 조회(by id)
	List<BoardReqDTO> findBoardById(String id);
	
	//게시글 조회(by btitle)
	List<BoardReqDTO> findBoardByBtitle(String bcategory,String btitle,int startRec, int endRec);
	
	//게시글 조회(by bcontent)
	List<BoardReqDTO> findBoardByBcontent(String bcategory,String bcontent,int startRec, int endRec);
	
	//게시글 조회(by nickname)
	List<BoardReqDTO> findBoardByNickname(String bcategory,String nickname,int startRec, int endRec);
		
	//게시글 수정
	int modifyBoard(int bnum,BoardDTO boardDTO);
	
	//게시글 삭제
	void deleteBoard(int bnum);
	
	//게시글 전체목록(by bcategory)
	List<BoardReqDTO> list(String bcategory);
	List<BoardReqDTO> list(String bcategory,int startRec, int endRec);
	
	//게시글 검색결과목록
	List<BoardReqDTO> list(SearchDTO searchDTO);
	
	//게시글 전체목록(좋아요순)
	List<BoardReqDTO> bgoodList(String bcategory);
	
	//댓글수 조회
	Integer reqBreply(Integer bnum);
	
	//공지추가
	void addNotice(int bnum);
		
	//공지삭제
	void delNotice(int bnum);
		
	//공지목록
	List<BoardReqDTO> noticeList(String bcategory);
	
	//해당글 공지여부
	boolean isNotice(int bnum);
	
	//게시판 전체 레코드수 
	long totoalRecordCount();
	
	//게시판 카테고리 레코드 전체수
	int totalRecordCount(String bcategory);
	
	//게시판 카테고리별 검색 레코드 총수
	int totalRecordCount(String bcategory,String searchType,String keyword);

}
