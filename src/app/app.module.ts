import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElearningSchoolDemoComponent } from './components/pages/elearning-school-demo/elearning-school-demo.component';
import { VendorCertificationEtrainingDemoComponent } from './components/pages/vendor-certification-etraining-demo/vendor-certification-etraining-demo.component';
import { OnlineTrainingSchoolDemoComponent } from './components/pages/online-training-school-demo/online-training-school-demo.component';
import { DistanceLearningDemoComponent } from './components/pages/distance-learning-demo/distance-learning-demo.component';
import { KitchenCoachDemoComponent } from './components/pages/kitchen-coach-demo/kitchen-coach-demo.component';
import { LearningManagementDemoComponent } from './components/pages/learning-management-demo/learning-management-demo.component';
import { OnlineEducationCoursesDemoComponent } from './components/pages/online-education-courses-demo/online-education-courses-demo.component';
import { RemoteTrainingDemoComponent } from './components/pages/remote-training-demo/remote-training-demo.component';
import { OnlineArtLearningDemoComponent } from './components/pages/online-art-learning-demo/online-art-learning-demo.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { EsdBannerComponent } from './components/pages/elearning-school-demo/esd-banner/esd-banner.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { StoriesComponent } from './components/common/stories/stories.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { BecomeAnInstructorComponent } from './components/common/become-an-instructor/become-an-instructor.component';
import { CategoriesComponent } from './components/common/categories/categories.component';
import { TrustedCompaniesComponent } from './components/common/trusted-companies/trusted-companies.component';
import { CoursesComponent } from './components/common/courses/courses.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { RecentViewingCoursesComponent } from './components/common/recent-viewing-courses/recent-viewing-courses.component';
import { VcedBannerComponent } from './components/pages/vendor-certification-etraining-demo/vced-banner/vced-banner.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { OtsdBannerComponent } from './components/pages/online-training-school-demo/otsd-banner/otsd-banner.component';
import { DldBannerComponent } from './components/pages/distance-learning-demo/dld-banner/dld-banner.component';
import { PopularCoursesComponent } from './components/common/popular-courses/popular-courses.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { EventsComponent } from './components/common/events/events.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { KcdBannerComponent } from './components/pages/kitchen-coach-demo/kcd-banner/kcd-banner.component';
import { AboutComponent } from './components/common/about/about.component';
import { KitchenCoachCoursesComponent } from './components/common/kitchen-coach-courses/kitchen-coach-courses.component';
import { BookDownloadComponent } from './components/common/book-download/book-download.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { LmdBannerComponent } from './components/pages/learning-management-demo/lmd-banner/lmd-banner.component';
import { ProjectManagementCoursesComponent } from './components/common/project-management-courses/project-management-courses.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { OecdBannerComponent } from './components/pages/online-education-courses-demo/oecd-banner/oecd-banner.component';
import { RtdBannerComponent } from './components/pages/remote-training-demo/rtd-banner/rtd-banner.component';
import { RemoteTrainingCoursesComponent } from './components/common/remote-training-courses/remote-training-courses.component';
import { VideoComponent } from './components/common/video/video.component';
import { OaldBannerComponent } from './components/pages/online-art-learning-demo/oald-banner/oald-banner.component';
import { ArtClassesComponent } from './components/common/art-classes/art-classes.component';
import { AnimationTextComponent } from './components/common/animation-text/animation-text.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PurchaseGuidePageComponent } from './components/pages/purchase-guide-page/purchase-guide-page.component';
import { ThankYouPageComponent } from './components/pages/thank-you-page/thank-you-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { InstructorsPageComponent } from './components/pages/instructors-page/instructors-page.component';
import { InstructorsProfilePageComponent } from './components/pages/instructors-profile-page/instructors-profile-page.component';
import { SuccessStoriesPageComponent } from './components/pages/success-stories-page/success-stories-page.component';
import { StudentStoryPageComponent } from './components/pages/student-story-page/student-story-page.component';
import { ContactPageOneComponent } from './components/pages/contact-page-one/contact-page-one.component';
import { ContactPageTwoComponent } from './components/pages/contact-page-two/contact-page-two.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogGridWidePageComponent } from './components/pages/blog-grid-wide-page/blog-grid-wide-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogSpecialPageComponent } from './components/pages/blog-special-page/blog-special-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { PopularArticlesComponent } from './components/pages/blog-special-page/popular-articles/popular-articles.component';
import { BusinessArticlesComponent } from './components/pages/blog-special-page/business-articles/business-articles.component';
import { VideoTipsArticlesComponent } from './components/pages/blog-special-page/video-tips-articles/video-tips-articles.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { ZoomMeetingsPageComponent } from './components/pages/zoom-meetings-page/zoom-meetings-page.component';
import { ZoomMeetingsDetailsPageComponent } from './components/pages/zoom-meetings-details-page/zoom-meetings-details-page.component';
import { OurSpeakersComponent } from './components/common/our-speakers/our-speakers.component';
import { BecomeAnInstructorPageComponent } from './components/pages/become-an-instructor-page/become-an-instructor-page.component';
import { MembershipLevelsPageComponent } from './components/pages/membership-levels-page/membership-levels-page.component';
import { HowItsWorkComponent } from './components/common/how-its-work/how-its-work.component';
import { CoursesBasicGridPageComponent } from './components/pages/courses-basic-grid-page/courses-basic-grid-page.component';
import { CoursesModernGridPageComponent } from './components/pages/courses-modern-grid-page/courses-modern-grid-page.component';
import { CoursesWideGridPageComponent } from './components/pages/courses-wide-grid-page/courses-wide-grid-page.component';
import { CoursesLeftSidebarPageComponent } from './components/pages/courses-left-sidebar-page/courses-left-sidebar-page.component';
import { CoursesRightSidebarPageComponent } from './components/pages/courses-right-sidebar-page/courses-right-sidebar-page.component';
import { CoursesListSidebarPageComponent } from './components/pages/courses-list-sidebar-page/courses-list-sidebar-page.component';
import { CoursesSidebarComponent } from './components/common/courses-sidebar/courses-sidebar.component';
import { CategoriesPageOneComponent } from './components/pages/categories-page-one/categories-page-one.component';
import { CategoriesPageTwoComponent } from './components/pages/categories-page-two/categories-page-two.component';
import { CategoriesCoursesPageComponent } from './components/pages/categories-courses-page/categories-courses-page.component';
import { CoursesStartedComponent } from './components/pages/categories-courses-page/courses-started/courses-started.component';
import { LearnCategoriesComponent } from './components/pages/categories-courses-page/learn-categories/learn-categories.component';
import { DevelopmentCoursesComponent } from './components/pages/categories-courses-page/development-courses/development-courses.component';
import { FreeCoursesSinglePageComponent } from './components/pages/free-courses-single-page/free-courses-single-page.component';
import { PaidCoursesSinglePageComponent } from './components/pages/paid-courses-single-page/paid-courses-single-page.component';
import { StickySidebarCoursesSinglePageComponent } from './components/pages/sticky-sidebar-courses-single-page/sticky-sidebar-courses-single-page.component';
import { RelatedCoursesComponent } from './components/common/related-courses/related-courses.component';
import { BecomeAPartnerPageComponent } from './components/pages/become-a-partner-page/become-a-partner-page.component';
import { QuestionBanksComponent } from './components/pages/question-banks/question-banks.component';
import { ArticleDetailsComponent } from './components/pages/article-details/article-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        AppComponent,
        ElearningSchoolDemoComponent,
        VendorCertificationEtrainingDemoComponent,
        OnlineTrainingSchoolDemoComponent,
        DistanceLearningDemoComponent,
        KitchenCoachDemoComponent,
        LearningManagementDemoComponent,
        OnlineEducationCoursesDemoComponent,
        RemoteTrainingDemoComponent,
        OnlineArtLearningDemoComponent,
        NotFoundComponent,
        FooterComponent,
        EsdBannerComponent,
      QuestionBanksComponent,
        FunfactsComponent,
        FreeTrialComponent,
        StoriesComponent,
        FeedbackComponent,
        BecomeAnInstructorComponent,
        BecomeAPartnerPageComponent,
        CategoriesComponent,
        TrustedCompaniesComponent,
        CoursesComponent,
        FeaturesComponent,
        RecentViewingCoursesComponent,
        VcedBannerComponent,
        BlogComponent,
        OtsdBannerComponent,
        DldBannerComponent,
        PopularCoursesComponent,
        WhyChooseUsComponent,
        EventsComponent,
        NavbarComponent,
        KcdBannerComponent,
        AboutComponent,
        KitchenCoachCoursesComponent,
        BookDownloadComponent,
        PartnerComponent,
        SubscribeComponent,
        LmdBannerComponent,
        ProjectManagementCoursesComponent,
        OverviewComponent,
        OecdBannerComponent,
        RtdBannerComponent,
        RemoteTrainingCoursesComponent,
        VideoComponent,
        OaldBannerComponent,
        ArtClassesComponent,
        AnimationTextComponent,
        AboutUsPageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        PurchaseGuidePageComponent,
        ThankYouPageComponent,
        ComingSoonPageComponent,
        ProfileAuthenticationPageComponent,
        ForgotPasswordPageComponent,
        FaqPageComponent,
        ProductsPageComponent,
        CartPageComponent,
        CheckoutPageComponent,
        ProductDetailsPageComponent,
        InstructorsPageComponent,
        InstructorsProfilePageComponent,
        SuccessStoriesPageComponent,
        StudentStoryPageComponent,
        ContactPageOneComponent,
        ContactPageTwoComponent,
        BlogGridPageComponent,
        BlogGridWidePageComponent,
        BlogLeftSidebarPageComponent,
        BlogRightSidebarPageComponent,
        BlogSpecialPageComponent,
        BlogDetailsPageComponent,
        WidgetSidebarComponent,
        PopularArticlesComponent,
        BusinessArticlesComponent,
        VideoTipsArticlesComponent,
        EventsPageComponent,
        EventsDetailsPageComponent,
        ZoomMeetingsPageComponent,
        ZoomMeetingsDetailsPageComponent,
        OurSpeakersComponent,
        BecomeAnInstructorPageComponent,
        MembershipLevelsPageComponent,
        HowItsWorkComponent,
        CoursesBasicGridPageComponent,
        CoursesModernGridPageComponent,
        CoursesWideGridPageComponent,
        CoursesLeftSidebarPageComponent,
        CoursesRightSidebarPageComponent,
        CoursesListSidebarPageComponent,
        CoursesSidebarComponent,
        CategoriesPageOneComponent,
        CategoriesPageTwoComponent,
        CategoriesCoursesPageComponent,
        CoursesStartedComponent,
        LearnCategoriesComponent,
        DevelopmentCoursesComponent,
        FreeCoursesSinglePageComponent,
        PaidCoursesSinglePageComponent,
        StickySidebarCoursesSinglePageComponent,
        RelatedCoursesComponent,
        ArticleDetailsComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        MdbTabsModule,
        BrowserModule,
        MdbModalModule,
        CarouselModule,
        AppRoutingModule,
        MdbCollapseModule,
        MdbAccordionModule,
        NgxScrollTopModule,
        BrowserAnimationsModule,
        DragDropModule,
 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }