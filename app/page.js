import TabsSection from "@/components/home/TabsSection"
import HeaderWidget from "@/components/includes/HeaderWidget"
import Footer from "@/components/includes/Footer"
import Navigation from "@/components/includes/Navigation"
import Form from "@/components/includes/Form"
import StatSection from "@/components/home/component/StatSection"
import dynamic from "next/dynamic";

const First100FoundersModalWrapper = dynamic(() => import("@/components/First100FoundersModalWrapper"), { ssr: false });
import { 
  getDomain,
  getData, 
  getStatus, 
  getFeaturedTasks, 
  getPeople, 
  getChallenges, 
  getContributors, 
  getEserviceCats,
  getTaskByStatus,
  getPartners,
  getTeam,
  getBrandChallenges,
  getBrandEarnings,
  getAnalytics,
  getBrandChart
} from '@/lib/data';

export default async function Home() {
  const c = await getData();
  const status = await getStatus();
  const domain = getDomain();
  const featuredTask = await getFeaturedTasks();
  const peopleList = await getPeople();
  const challengeList = await getChallenges();
  const contributorList = await getContributors();
  const getCategories = await getEserviceCats();
  const getOpentTasks = await getTaskByStatus('open');
  const getProdTasks = await getTaskByStatus('in-production');
  const getVerificationTasks = await getTaskByStatus('for-verification');
  const getCompletedTasks = await getTaskByStatus('completed');
  const partnerList = await getPartners();
  const teamList = await getTeam();
  const brandChallenges = await getBrandChallenges();
  const earnings = await getBrandEarnings();
  const analytics = await getAnalytics();
  const chart = await getBrandChart();

  return (
    <>
      <First100FoundersModalWrapper />
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
      <Navigation  domain={domain} logo={c.data.logo} />
      <div className="tw-py-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="mb-5 text-center">
                Join a vibrant community of developers, influencers, and entrepreneurs on {domain}, all using the versatile CONTRIB token to power their token economies!
              </h1>
            </div>
            <Form domain={domain} formtype="topForm"/>
            <StatSection domainStats={status}/>
            
            <div className="col-xl-12">
              <TabsSection 
              domain={domain}
              featuredTask={featuredTask}
              peopleList={peopleList}
              getChallenges={challengeList}
              contributorList={contributorList}
              getCategories={getCategories}
              getOpentTasks={getOpentTasks}
              getVerificationTasks={getVerificationTasks}
              getProdTasks={getProdTasks}
              getCompletedTasks={getCompletedTasks}
              partnerList={partnerList}
              teamList={teamList}
              brandChallenges={brandChallenges}
              earnings={earnings}
              analytics={analytics}
              chart={chart}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
