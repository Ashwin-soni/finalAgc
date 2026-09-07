import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import HeroCarousel from "../components/HeroCarousel";
import ExploreCourses from "../components/ExploreCourses";
import ImageScroller from "../components/ImageScroller";
import MeetOurStars from "../components/MeetOurStars";
import ChampionCourses from "../components/ChampionCourses";
import RequestCallback from "../components/RequestCallback";
import VideoTestimonials from "../components/VideoTestimonials";
import AppPromo from "../components/AppPromo";
import Footer from "../components/Footer";

import OurLocationSection from "../components/OurLocationSection";

export default function HomePage() {
  return (
    <main id="home">
      <Navbar />
      <AnnouncementBar />
      <HeroCarousel />
      <ExploreCourses />
      <section className="mx-auto max-w-container px-4 py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            What's Trending
          </h2>
        </div>
        <ImageScroller />
      </section>
      <MeetOurStars/>
      <ChampionCourses/>
      <RequestCallback/>
      <VideoTestimonials/>
      <AppPromo/>
      <OurLocationSection/>
      <Footer/>
    </main>
  );
}
