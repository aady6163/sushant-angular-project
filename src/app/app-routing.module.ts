import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { BecomeAnInstructorPageComponent } from './components/pages/become-an-instructor-page/become-an-instructor-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogGridWidePageComponent } from './components/pages/blog-grid-wide-page/blog-grid-wide-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogSpecialPageComponent } from './components/pages/blog-special-page/blog-special-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CategoriesCoursesPageComponent } from './components/pages/categories-courses-page/categories-courses-page.component';
import { CategoriesPageOneComponent } from './components/pages/categories-page-one/categories-page-one.component';
import { CategoriesPageTwoComponent } from './components/pages/categories-page-two/categories-page-two.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageOneComponent } from './components/pages/contact-page-one/contact-page-one.component';
import { ContactPageTwoComponent } from './components/pages/contact-page-two/contact-page-two.component';
import { CoursesBasicGridPageComponent } from './components/pages/courses-basic-grid-page/courses-basic-grid-page.component';
import { CoursesLeftSidebarPageComponent } from './components/pages/courses-left-sidebar-page/courses-left-sidebar-page.component';
import { CoursesListSidebarPageComponent } from './components/pages/courses-list-sidebar-page/courses-list-sidebar-page.component';
import { CoursesModernGridPageComponent } from './components/pages/courses-modern-grid-page/courses-modern-grid-page.component';
import { CoursesRightSidebarPageComponent } from './components/pages/courses-right-sidebar-page/courses-right-sidebar-page.component';
import { CoursesWideGridPageComponent } from './components/pages/courses-wide-grid-page/courses-wide-grid-page.component';
import { DistanceLearningDemoComponent } from './components/pages/distance-learning-demo/distance-learning-demo.component';
import { ElearningSchoolDemoComponent } from './components/pages/elearning-school-demo/elearning-school-demo.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { FreeCoursesSinglePageComponent } from './components/pages/free-courses-single-page/free-courses-single-page.component';
import { InstructorsPageComponent } from './components/pages/instructors-page/instructors-page.component';
import { InstructorsProfilePageComponent } from './components/pages/instructors-profile-page/instructors-profile-page.component';
import { KitchenCoachDemoComponent } from './components/pages/kitchen-coach-demo/kitchen-coach-demo.component';
import { LearningManagementDemoComponent } from './components/pages/learning-management-demo/learning-management-demo.component';
import { MembershipLevelsPageComponent } from './components/pages/membership-levels-page/membership-levels-page.component';
import { OnlineArtLearningDemoComponent } from './components/pages/online-art-learning-demo/online-art-learning-demo.component';
import { OnlineEducationCoursesDemoComponent } from './components/pages/online-education-courses-demo/online-education-courses-demo.component';
import { OnlineTrainingSchoolDemoComponent } from './components/pages/online-training-school-demo/online-training-school-demo.component';
import { PaidCoursesSinglePageComponent } from './components/pages/paid-courses-single-page/paid-courses-single-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { PurchaseGuidePageComponent } from './components/pages/purchase-guide-page/purchase-guide-page.component';
import { RemoteTrainingDemoComponent } from './components/pages/remote-training-demo/remote-training-demo.component';
import { StickySidebarCoursesSinglePageComponent } from './components/pages/sticky-sidebar-courses-single-page/sticky-sidebar-courses-single-page.component';
import { StudentStoryPageComponent } from './components/pages/student-story-page/student-story-page.component';
import { SuccessStoriesPageComponent } from './components/pages/success-stories-page/success-stories-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ThankYouPageComponent } from './components/pages/thank-you-page/thank-you-page.component';
import { VendorCertificationEtrainingDemoComponent } from './components/pages/vendor-certification-etraining-demo/vendor-certification-etraining-demo.component';
import { ZoomMeetingsDetailsPageComponent } from './components/pages/zoom-meetings-details-page/zoom-meetings-details-page.component';
import { ZoomMeetingsPageComponent } from './components/pages/zoom-meetings-page/zoom-meetings-page.component';
import { BecomeAPartnerPageComponent } from './components/pages/become-a-partner-page/become-a-partner-page.component';
import { QuestionBanksComponent } from './components/pages/question-banks/question-banks.component';
import { ArticleDetailsComponent } from './components/pages/article-details/article-details.component';
const routes: Routes = [
    {path: '', component: ElearningSchoolDemoComponent},
    {path: 'vendor-certification-etraining', component: VendorCertificationEtrainingDemoComponent},
    {path: 'online-training-school', component: OnlineTrainingSchoolDemoComponent},
    {path: 'distance-learning', component: DistanceLearningDemoComponent},
    {path: 'kitchen-coach', component: KitchenCoachDemoComponent},
    {path: 'learning-management', component: LearningManagementDemoComponent},
    {path: 'online-education-courses', component: OnlineEducationCoursesDemoComponent},
    {path: 'remote-training', component: RemoteTrainingDemoComponent},
    {path: 'online-art-learning', component: OnlineArtLearningDemoComponent},
    {path: 'courses-grid', component: CoursesBasicGridPageComponent},
    {path: 'courses-grid-2', component: CoursesModernGridPageComponent},
    {path: 'courses-wide-grid', component: CoursesWideGridPageComponent},
    {path: 'courses-left-sidebar', component: CoursesLeftSidebarPageComponent},
    {path: 'courses-right-sidebar', component: CoursesRightSidebarPageComponent},
    {path: 'courses-list', component: CoursesListSidebarPageComponent},
    {path: 'courses-details', component: FreeCoursesSinglePageComponent},
    {path: 'courses-details-2', component: PaidCoursesSinglePageComponent},
    {path: 'courses-details-3', component: StickySidebarCoursesSinglePageComponent},
    {path: 'categories', component: CategoriesPageOneComponent},
    {path: 'categories-2', component: CategoriesPageTwoComponent},
    {path: 'courses-category', component: CategoriesCoursesPageComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'instructors', component: InstructorsPageComponent},
    {path: 'profile', component: InstructorsProfilePageComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'purchase-guide', component: PurchaseGuidePageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'thank-you', component: ThankYouPageComponent},
    {path: 'success-stories', component: SuccessStoriesPageComponent},
    {path: 'student-story', component: StudentStoryPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'events-details', component: EventsDetailsPageComponent},
    {path: 'zoom-meetings', component: ZoomMeetingsPageComponent},
    {path: 'zoom-meetings-details', component: ZoomMeetingsDetailsPageComponent},
    {path: 'become-an-instructor', component: BecomeAnInstructorPageComponent},
    {path: 'become-a-partner', component: BecomeAPartnerPageComponent},
    {path: 'question-bank', component: QuestionBanksComponent},
    {path: 'membership-levels', component: MembershipLevelsPageComponent},
    {path: 'products', component: ProductsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'product-details', component: ProductDetailsPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-grid-wide', component: BlogGridWidePageComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-special', component: BlogSpecialPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageOneComponent},
    {path: 'contact-2', component: ContactPageTwoComponent},
    {path : 'article-details' , component : ArticleDetailsComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }