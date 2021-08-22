package com.proj.animore.svc;

import java.util.List;

import org.springframework.stereotype.Service;

import com.proj.animore.dao.RboardDAO;
import com.proj.animore.dto.RboardDTO;
import com.proj.animore.dto.RboardListReqDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RboardSVCImpl implements RboardSVC {

	private final RboardDAO rboardDAO;

	/**
	 * 댓글등록처리
	 * @param bnum
	 * @param id
	 * @param rboardDTO
	 * @return
	 */
	@Override
	public List<RboardListReqDTO> register(int bnum, String id, RboardDTO rboardDTO) {
		return rboardDAO.register(bnum, id, rboardDTO);
	}

	/**
	 * 댓글수정처리
	 * @param rnum
	 * @param id
	 * @param rboardDTO
	 * @return
	 */
	@Override
	public List<RboardListReqDTO> modify(int bnum, int rnum, String id, RboardDTO rboardDTO) {
		return rboardDAO.modify(bnum, rnum, id, rboardDTO);
	}
	
	/**
	 * 댓글조회 by 댓글번호
	 */
	@Override
	public RboardListReqDTO findByRnum(int bnum, int rnum) {
		return rboardDAO.findbyRnum(bnum, rnum);
	}
	
	/**
	 * 댓글삭제 by 댓글번호, 사용자id
	 */
	@Override
	public List<RboardListReqDTO> del(int bnum, int rnum, String id) {
		return rboardDAO.del(bnum, rnum, id);
	}

	/**
	 * 댓글목록조회 by 게시글번호
	 */
	@Override
	public List<RboardListReqDTO> all(int bnum) {
		return rboardDAO.all(bnum);
	}
	
}
