export interface ProjectType {
  title: string;
  description: string;
  purpose: string;
  image: string[];
  skill: string[];
  repositoryUrl: string;
  deploy?: string;
  deployUrl?: string;
  etc?: string[];
}

export const ProjectList: ProjectType[] = [
  {
    title: "쇼핑몰 사이트",
    description:
      "사용자 회원가입 및 로그인부터 상품등록, 조회, 구매, 구매내역, 장바구니 추가 등 쇼핑몰 사이트의 전반적인 과정을 구현하였으며 Node.js Express를 사용해 서버를 구축하고 MongoDB에 사용자 정보와 상품 정보 저장 및 조회, 이미지 파일은 AWS S3에 업로드하여 관리됩니다. 지속적인 수정을 거듭하여 기능 및 퍼포먼스 개선을 하였으며 동시에 리팩터링을 하며 보다 나은 코드에 대해 고민한 프로젝트입니다.",
    purpose:
      "클라이언트 뿐만 아니라 서버까지 구현함으로써 하나의 완성된 사이트",
    image: [""],
    skill: [
      "REACT",
      "REACT-REDUX",
      "REACT-ROUTER-DOM",
      "STYLED-COMPONENTS",
      "AXIOS",
      "EXPRSS",
      "MONGO DB",
      "AWS S3",
    ],
    repositoryUrl: "https://github.com/CCCWS/react-shopping-app",
    deploy: "AWS",
    deployUrl: "www.test.test",
    etc: ["반응형", "다크모드", "서버"],
  },

  {
    title: "영화 정보 사이트",
    description:
      "TMDB의 영화 데이터를 API요청하고 응답받은 데이터를 가공하여 사용합니다. 영화 및 TV시리즈의 상세 정보와 카테고리별 분류, 키워드를 조합한 상세 검색, LocalStorage를 사용하여 조회내역 및 즐겨찾기 기능을 제공합니다.",
    purpose: "요청한 데이터를 보기좋게 가공",
    image: [""],
    skill: ["REACT", "REACT-ROUTER-DOM", "CSS", "ANTD"],
    repositoryUrl: "https://github.com/CCCWS/react-movie-app",
    deploy: "Firebase",
    deployUrl: "https://cws-react-movie-ae030.web.app/",
    etc: ["반응형", "API"],
  },

  {
    title: "AI채팅 사이트",
    description:
      "OpenAi의 학습된 데이터를 기반으로 대화를 주고 받을수 있습니다. 한글 전송시 다소 매끄럽지 못한 상황이 발생하여 NAVER PAPAGO API를 사용하여 번역하여 메세지가 전송됩니다.",
    purpose: "실제 메신저와 유사하게 구성",
    image: [""],
    skill: ["REACT", "TYPESCRIPT", "STYLED-COMPONENTS", "AXIOS"],
    repositoryUrl: "https://github.com/CCCWS/react-aichat",
    deploy: "Firebase",
    deployUrl: "https://cws-react-movie-ae030.web.app/",
    etc: ["API"],
  },

  {
    title: "컴포넌트 모음",
    description: "자주 사용되는 컴포넌트를 재사용이 용이하게 개량하였습니다.",
    purpose: "높은 재사용성과 쉬운 사용법으로 누구나 사용",
    image: [""],
    skill: ["REACT", "STYLED-COMPONENTS", "TYPESCRIPT"],
    repositoryUrl: "https://github.com/CCCWS/react-component",
  },
];
