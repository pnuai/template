---
id: demo-v1-5
title: "SW중심대학 사업 소개 (HTML 인라인 버전)"
sidebar_position: 98
nav_label: 데모 v1.5
theme: public-blue
hide_title: true
---

<div style={{fontFamily: "'Noto Sans KR', sans-serif", maxWidth: '900px', margin: '0 auto', padding: '0 24px'}}>

{/* ── 히어로 ── */}
<div style={{background: 'linear-gradient(135deg, #0b1f4e 0%, #1757c2 60%, #4a82e4 100%)', color: '#fff', borderRadius: '12px', padding: '56px 48px', marginBottom: '32px', position: 'relative', overflow: 'hidden'}}>
  <div style={{fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '16px'}}>DEMO · SW중심대학</div>
  <div style={{fontSize: '2.6rem', fontWeight: 900, lineHeight: 1.2, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.03em'}}>진정한 AI·SW 가치확산을<br/>실현하는 부산대학교 SW중심대학</div>
  <div style={{fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, margin: 0}}>대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화하고,<br/>진정한 Software 가치의 확산을 실현하는 동남권 거점 국립대학입니다.</div>
</div>

{/* ── KPI 수치 ── */}
<div style={{background: '#fff', border: '1px solid #dce8f8', borderRadius: '12px', padding: '32px 36px', marginBottom: '28px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0'}}>
  {[
    {label: 'SW학과 정원', value: '192명', sub: '2019년 대비 43% 순증'},
    {label: '전공 특화 트랙', value: '8개', sub: '클라우드·보안·IoT 등'},
    {label: 'SW-X 융합트랙', value: '14개', sub: '전 학문 분야 융합 교과목'},
    {label: '동남권 AI·SW 거점', value: '1위', sub: '국립대학 최초 SW중심대학'},
  ].map((item, i, arr) => (
    <div key={i} style={{textAlign: 'center', padding: '8px 16px', borderRight: i < arr.length - 1 ? '1px solid #e8f0fc' : 'none'}}>
      <div style={{fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1757c2', marginBottom: '8px'}}>{item.label}</div>
      <div style={{fontSize: '2.2rem', fontWeight: 900, color: '#0b1f4e', letterSpacing: '-0.04em', lineHeight: 1}}>{item.value}</div>
      <div style={{fontSize: '11.5px', color: '#6b7a99', marginTop: '6px'}}>{item.sub}</div>
    </div>
  ))}
</div>

{/* ── 5대 미션 카드 ── */}
<div style={{marginBottom: '28px'}}>
  <div style={{fontSize: '10.5px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1757c2', marginBottom: '4px'}}>CORE EDUCATION MISSION</div>
  <div style={{fontSize: '20px', fontWeight: 900, color: '#0b1f4e', marginBottom: '16px'}}>5대 핵심 교육 미션</div>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px'}}>
    {[
      {icon: '🎯', title: 'AI·SW 전문인력 양성', desc: '이론과 실무를 겸비한 AI·SW 전문 교육으로 현장에서 즉각 활약할 수 있는 실무형 인재 양성'},
      {icon: '🏗️', title: 'AI·SW 특화교육환경 구축', desc: '신기술 분야 학습을 위한 교육 인프라 구축 — DevCloud, AI Platform, 전용 건물 신축'},
      {icon: '🤝', title: '실효성 있는 산학협력', desc: '산학협력 프로젝트, 채용연계형 인턴십을 통해 실제 산업현장에 적용할 수 있는 AI·SW 역량 교육'},
      {icon: '🌏', title: 'AI·SW 가치확산', desc: '공교육 내 AI·SW 교육 강화, 지역 소외계층과 미취업자·일반인을 위한 맞춤형 프로그램 운영'},
      {icon: '📐', title: 'AI·SW 인력양성 저변 확대', desc: '인문·사회 등 타 전공별 특성을 반영한 AI·SW기초 교육 의무화 및 융합과정 활성화'},
    ].map((item, i) => (
      <div key={i} style={{background: '#fff', border: '1px solid #dce8f8', borderRadius: '12px', padding: '22px 20px', borderTop: '3px solid #1757c2'}}>
        <div style={{fontSize: '24px', marginBottom: '10px'}}>{item.icon}</div>
        <div style={{fontSize: '13.5px', fontWeight: 800, color: '#0b1f4e', marginBottom: '8px'}}>{item.title}</div>
        <div style={{fontSize: '12px', color: '#4a6fa5', lineHeight: 1.6}}>{item.desc}</div>
      </div>
    ))}
  </div>
</div>

{/* ── 4C 전략 ── */}
<div style={{background: '#0b1f4e', borderRadius: '12px', padding: '36px', marginBottom: '28px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0'}}>
  <div style={{gridColumn: '1/-1', fontSize: '10.5px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '4px'}}>STRATEGIC FRAMEWORK</div>
  <div style={{gridColumn: '1/-1', fontSize: '20px', fontWeight: 900, color: '#fff', marginBottom: '24px'}}>4C 추진전략</div>
  {[
    {letter: 'C', title: 'Customized Education', desc: '신기술 반영 교육과정 기반 맞춤형 교육혁신'},
    {letter: 'C', title: 'Convergence Research', desc: '미래지향적 융합 연구 및 성과 창출'},
    {letter: 'C', title: 'Cooperative Industry-Univ.', desc: '소통·관계 중심 산학협력 네트워크 강화'},
    {letter: 'C', title: 'Connected Regional Community', desc: 'SW가치확산 지역거점 AI·SW 허브 구축'},
  ].map((item, i, arr) => (
    <div key={i} style={{padding: '0 20px', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'}}>
      <div style={{fontSize: '2.8rem', fontWeight: 900, color: '#4a82e4', lineHeight: 1, marginBottom: '10px'}}>{item.letter}</div>
      <div style={{fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '6px'}}>{item.title}</div>
      <div style={{fontSize: '11.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6}}>{item.desc}</div>
    </div>
  ))}
</div>

{/* ── 모집 정원 테이블 ── */}
<div style={{background: '#fff', border: '1px solid #dce8f8', borderRadius: '12px', overflow: 'hidden', marginBottom: '28px'}}>
  <div style={{background: 'linear-gradient(90deg, #0b1f4e 0%, #1757c2 100%)', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '12px'}}>
    <span style={{fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)'}}>ENROLLMENT QUOTAS</span>
    <span style={{fontSize: '15px', fontWeight: 800, color: '#fff'}}>2026학년도 AI·SW학과 모집 정원</span>
  </div>
  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
    <thead>
      <tr style={{background: '#f0f4f8'}}>
        <th style={{padding: '10px 18px', textAlign: 'left', fontWeight: 700, color: '#0b1f4e', borderBottom: '1px solid #dce8f8'}}>모집단위</th>
        <th style={{padding: '10px 18px', textAlign: 'center', fontWeight: 700, color: '#0b1f4e', borderBottom: '1px solid #dce8f8'}}>정원</th>
        <th style={{padding: '10px 18px', textAlign: 'left', fontWeight: 700, color: '#0b1f4e', borderBottom: '1px solid #dce8f8'}}>비고</th>
      </tr>
    </thead>
    <tbody>
      {[
        {name: '컴퓨터공학전공', count: '84명', note: 'SW 전공 핵심 학과'},
        {name: '인공지능전공', count: '60명', note: '전국 최초 부산대-경북대 공동학과'},
        {name: '데이터사이언스전공', count: '44명', note: '의생명융합공학부 내 전공'},
        {name: '디자인테크놀로지전공', count: '17명', note: '디자인 및 IT 융합트랙 특화'},
      ].map((row, i) => (
        <tr key={i} style={{borderBottom: '1px solid #e8f0fc', background: i % 2 === 1 ? '#f8fafd' : '#fff'}}>
          <td style={{padding: '11px 18px', fontWeight: 700, color: '#0b1f4e'}}>{row.name}</td>
          <td style={{padding: '11px 18px', textAlign: 'center', fontWeight: 700, color: '#1757c2', fontSize: '15px'}}>{row.count}</td>
          <td style={{padding: '11px 18px', color: '#4a6fa5'}}>{row.note}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>
