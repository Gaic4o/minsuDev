# 프로젝트 구조

이 프로젝트는 모노레포 구조를 기반으로 설계되었습니다.<br/>
이 구조를 통해 추후에 공통된 hooks와 components를 모노레포의 packages 디렉토리에 분리하고, app 디렉토리의 Next.js 프로젝트에서 이를 임포트하여 사용할 계획입니다.<br/>
이러한 접근 방식은 코드의 재사용성을 극대화하고, 프로젝트 관리의 효율성을 높이는 데 중점을 둘려고 합니다.<br/>
또한 CI/CD 및 호스팅은 Vercel을 통해 관리되고 있습니다.<br/>

## 백엔드 구성

백엔드는 Supabase를 사용하여 구현되었습니다.<br/>
이는 서버리스 데이터베이스와 인증 솔루션을 제공하여, 빠르고 효율적인 백엔드 서비스를 가능하게 합니다.

### 주요 페이지 구성

Home (app/(home)): 메인 페이지로, 사용자가 처음 접속하면 볼 수 있는 페이지입니다. [메인 페이지](https://minsu-dev.vercel.app/) <br/>
Content (content/[id]): 각 포스트의 상세 내용을 보여주는 페이지입니다. [Content 페이지](https://minsu-dev.vercel.app/content/6) <br/>
Login (login): 사용자 인증을 위한 로그인 페이지입니다. [로그인 페이지](https://minsu-dev.vercel.app/login) <br/>
Write (write): 사용자가 새로운 포스트를 작성할 수 있는 페이지입니다. [글 작성 페이지](https://minsu-dev.vercel.app/login) <br/> 

### 컴포넌트 구조

components: 프로젝트 전반에 걸쳐 재사용 가능한 공통 컴포넌트들을 이곳에 분리하여 관리합니다.<br/>
foo: 특정 페이지에 특화된 기능 컴포넌트들을 foo 디렉토리에 구성하여, 각 페이지의 고유 기능을 지원합니다.
