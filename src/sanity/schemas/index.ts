import { pageSchema } from "./page";
import { siteSettingsSchema } from "./siteSettings";
import { faqSchema } from "./faq";
import { serviceSchema } from "./service";
import { reviewSchema } from "./review";
import { homePageSchema } from "./homePage";
import { storageServicesPageSchema } from "./storageServicesPage";
import { ourFacilityPageSchema } from "./ourFacilityPage";
import { partnersPageSchema } from "./partnersPage";
import { journalPageSchema } from "./journalPage";
import { faqPageContentSchema } from "./faqPageContent";
import { contactPageSchema } from "./contactPage";
import { calculatePageSchema } from "./calculatePage";
import { partnerSchema } from "./partner";
import { postSchema } from "./post";

export const schemaTypes = [
  // Collections
  faqSchema,
  serviceSchema,
  reviewSchema,
  partnerSchema,
  postSchema,
  // Page singletons
  homePageSchema,
  storageServicesPageSchema,
  ourFacilityPageSchema,
  partnersPageSchema,
  journalPageSchema,
  faqPageContentSchema,
  contactPageSchema,
  calculatePageSchema,
  // Global
  siteSettingsSchema,
  pageSchema,
];
