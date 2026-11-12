import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  GraduationCap, 
  LineChart, 
  Sparkles, 
  ChevronDown, 
  Calendar,
  CheckSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 나) 보여 줄 것 세 가지
  const threeShowcases = [
    {
      id: "ai-web",
      tag: "프로젝트 01",
      title: "인공지능과 IT 활용 & 웹 개발",
      icon: <Code2 className="w-6 h-6 text-accent" />,
      items: [
        "ChatGPT 활용",
        "Lovable을 이용한 웹페이지 제작",
        "자바스크립트 코딩",
        "구글 앱스 스크립트로 웹앱 만들기",
        "설문조사, 가계부, 뉴스 수집 프로그램 개발",
        "구글 스프레드시트 연동 및 일상생활 자동화"
      ]
    },
    {
      id: "education",
      tag: "프로젝트 02",
      title: "교육과 디지털 기술",
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      items: [
        "교육공무원으로 초등학교 교사 활동",
        "초등교육과 학생 지도 및 교육 현장 경험",
        "교육과 관련한 다양한 행정 및 업무 경험",
        "AI를 활용한 교육",
        "교사의 권리와 교육 현장의 변화",
        "새로운 디지털 기술과 교육 활용 탐구"
      ]
    },
    {
      id: "analysis-design",
      tag: "프로젝트 03",
      title: "경제 분석과 전통문화 디자인",
      icon: <LineChart className="w-6 h-6 text-accent" />,
      items: [
        "국내외 주식시장 분석",
        "삼성전자 파운드리와 반도체 산업 분석",
        "바이오 및 인공장기 산업 (유나이티드 테라퓨틱스)",
        "기업의 기술 경쟁력과 재무건전성 분석",
        "부동산과 세금",
        "한복 디자인과 저고리 제작, 전통 원단과 자수 레이스, 의상 디자인 시각화"
      ]
    }
  ]

  // 다) 걸어온 길 (시기 순서대로 네다섯 줄)
  const journeySteps = [
    {
      step: "01",
      text: "교육공무원으로 초등학교 교사 활동 시작"
    },
    {
      step: "02",
      text: "학생 지도와 교육 현장 경험 및 교육 관련 다양한 행정·업무 수행"
    },
    {
      step: "03",
      text: "교육 현장의 변화에 맞춘 AI 활용 교육 및 디지털 기술 관심 확대"
    },
    {
      step: "04",
      text: "구글 앱스 스크립트 웹앱(설문조사, 가계부, 뉴스 수집) 개발 및 자바스크립트 코딩"
    },
    {
      step: "05",
      text: "경제 분석, 한복 디자인 등 다양한 분야의 배움을 생활과 프로젝트에 지속적으로 적용"
    }
  ]

  // 라) 할 수 있는 것 (잘하는 것을 쉼표로 나열)
  const skillsList = [
    "초등학교 학생 지도",
    "교육 관련 행정 및 업무",
    "AI 활용 교육",
    "ChatGPT 활용",
    "Lovable 이용 웹페이지 제작",
    "자바스크립트 코딩",
    "구글 앱스 스크립트 웹앱 제작",
    "구글 스프레드시트 연동",
    "일상생활 자동화",
    "설문조사 프로그램 개발",
    "가계부 프로그램 개발",
    "뉴스 수집 프로그램 개발",
    "국내외 주식시장 분석",
    "반도체 산업 기술 경쟁력 분석",
    "바이오 및 인공장기 산업 분석",
    "기업 재무건전성 분석",
    "부동산 및 세금 분석",
    "한복 디자인 및 저고리 제작",
    "전통 원단과 자수 레이스 조합 연구",
    "사진 활용 의상 디자인 시각화"
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-black">
      {/* 상단 네비게이션 */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-pulse" />
            My Life, My Story
          </span>
          <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-muted hover:text-white transition-colors px-2 py-1"
            >
              보여 줄 것
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-muted hover:text-white transition-colors px-2 py-1"
            >
              걸어온 길
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted hover:text-white transition-colors px-2 py-1"
            >
              할 수 있는 것
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* 가) 맨 위 한 줄 소개 섹션 */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20">
          {/* 은은하게 움직이는 기하학적 배경 무늬 (색과 도형) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 배경 격자 패턴 */}
            <div 
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(rgba(163, 230, 53, 0.4) 1px, transparent 1px)`,
                backgroundSize: '36px 36px'
              }}
            />

            {/* 천천히 회전하고 이동하는 은은한 사각/원형 프레임 1 */}
            <motion.div
              className="absolute -top-12 -left-12 w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-accent/20"
              animate={{
                x: [0, 30, -20, 0],
                y: [0, 25, 10, 0],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'radial-gradient(circle, rgba(163, 230, 53, 0.04) 0%, transparent 70%)'
              }}
            />

            {/* 천천히 이동하는 은은한 사각 프레임 2 */}
            <motion.div
              className="absolute -bottom-24 -right-24 w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-3xl border border-white/5"
              animate={{
                x: [0, -35, 15, 0],
                y: [0, -30, -10, 0],
                rotate: [0, -45, -90, -135, -180],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)'
              }}
            />

            {/* 중심부 은은한 연두빛 글로우 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-accent/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-accent" />
                배움에는 끝이 없고, 도전에는 나이가 없다
              </Badge>
            </motion.div>

            {/* 가) 맨 위 한 줄 소개 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-none max-w-3xl"
            >
              배움과 도전으로 <br className="sm:hidden" />
              <span className="text-accent underline decoration-accent/40 underline-offset-8">나만의 삶</span>을 만들어가는 사람
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-base sm:text-xl text-muted max-w-2xl leading-relaxed"
            >
              교육 현장에서의 경험을 바탕으로 인공지능과 디지털 기술을 배우고,
              직접 웹과 프로그램을 만들어 가며 새로운 도전을 즐깁니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button 
                onClick={() => scrollToSection('showcase')}
                size="lg"
                className="gap-2 font-bold"
              >
                소개 보기
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button 
                onClick={() => scrollToSection('journey')}
                variant="outline"
                size="lg"
                className="font-bold"
              >
                걸어온 길 보기
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 나) 보여 줄 것 세 가지 */}
        <section id="showcase" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 border-t border-white/5 bg-[#0f1115]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3">
                포트폴리오
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                보여 줄 것 세 가지
              </h2>
              <p className="mt-3 text-muted text-sm sm:text-base">
                제가 할 수 있는 일과 프로젝트 활동을 세 영역으로 정리했습니다.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {threeShowcases.map((showcase, index) => (
                <motion.div
                  key={showcase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full flex flex-col hover:border-accent/40 hover:bg-surface-hover">
                    <CardHeader className="space-y-3 pb-4">
                      <div className="flex items-center justify-between">
                        <span className="p-2.5 rounded-lg bg-accent-dim border border-accent/20">
                          {showcase.icon}
                        </span>
                        <Badge variant="subtle" className="text-xs">
                          {showcase.tag}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold leading-snug">
                        {showcase.title}
                      </CardTitle>
                    </CardHeader>
                    <Separator className="bg-white/5" />
                    <CardContent className="pt-6 flex-1">
                      <ul className="space-y-3">
                        {showcase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 다) 걸어온 길 (시기 순서대로 네다섯 줄) */}
        <section id="journey" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3">
                경험과 기록
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                걸어온 길
              </h2>
              <p className="mt-3 text-muted text-sm sm:text-base">
                교육 현장에서부터 디지털 기술 탐구와 프로그램 개발까지 걸어온 과정입니다.
              </p>
            </motion.div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 sm:space-y-12">
              {journeySteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* 타임라인 원형 마커 */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors" />

                  <div className="p-5 sm:p-6 rounded-xl border border-white/10 bg-surface group-hover:border-accent/40 group-hover:bg-surface-hover transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                        단계 {step.step}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 라) 할 수 있는 것 (잘하는 것을 쉼표로 나열) */}
        <section id="skills" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 border-t border-white/5 bg-[#0f1115]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3">
                역량 목록
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                할 수 있는 것
              </h2>
              <p className="mt-3 text-muted text-sm sm:text-base">
                제가 잘하고 다룰 수 있는 지식과 기술을 나열하였습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 sm:p-10 border-white/10 bg-surface">
                <div className="flex items-center gap-2 mb-6">
                  <CheckSquare className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    보유 역량 요약 (쉼표 나열)
                  </span>
                </div>

                {/* 쉼표로 나열된 텍스트 표현 */}
                <p className="text-base sm:text-lg leading-loose text-white font-normal p-5 sm:p-6 rounded-lg bg-background/60 border border-white/5">
                  {skillsList.join(", ")}
                </p>

                {/* 개별 뱃지 형태의 시각적 보조 뷰 */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-xs text-muted mb-4 font-medium">항목별 태그 보기</p>
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="subtle"
                        className="py-1.5 px-3 text-xs sm:text-sm hover:border-accent/40"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 하단 푸터 */}
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6 bg-background text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 나만의 웹페이지 아카이브. 배움과 도전으로 채워가는 나의 이야기.</p>
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            <span>Education · Technology · Investment · Design</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
