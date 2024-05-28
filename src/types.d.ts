export interface WeatherApiResBase {
  current: {
    cloud: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
}

export interface WeatherApiRes {
  feelslike: ApiResBase['current']['feelslike_c'];
  humidity: ApiResBase['current']['humidity'];
  isDay: ApiResBase['current']['is_day'];
  location: {
    country: ApiResBase['location']['country'];
    time: ApiResBase['location']['localtime'];
    name: ApiResBase['location']['name'];
  };
}

export interface UnsplashApiResBase {
  results: Result[];
  total: number;
  total_pages: number;
}

export interface Result {
  alt_description: string;
  alternative_slugs: AlternativeSlugs;
  asset_type: AssetType;
  blur_hash: string;
  breadcrumbs: Breadcrumb[];
  color: string;
  created_at: Date;
  current_user_collections: any[];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ResultLinks;
  promoted_at: Date | null;
  slug: string;
  sponsorship: null;
  tags: Tag[];
  topic_submissions: ResultTopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface AlternativeSlugs {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  ja: string;
  ko: string;
  pt: string;
}

export enum AssetType {
  Photo = "photo",
}

export interface Breadcrumb {
  index: number;
  slug: BreadcrumbSlug;
  title: BreadcrumbTitle;
  type: Type;
}

export enum BreadcrumbSlug {
  Cool = "cool",
  Feelings = "feelings",
  Images = "images",
  Mexico = "mexico",
  Travel = "travel",
}

export enum BreadcrumbTitle {
  CoolImagesPhotos = "Cool Images & Photos",
  FeelingsImages = "Feelings Images",
  MexicoPicturesImages = "Mexico Pictures & Images",
  The1000000FreeImages = "1,000,000+ Free Images",
  TravelImages = "Travel Images",
}

export enum Type {
  LandingPage = "landing_page",
  Search = "search",
}

export interface ResultLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface Tag {
  source?: Source;
  title: string;
  type: Type;
}

export interface Source {
  ancestry: Ancestry;
  cover_photo: CoverPhoto;
  description: string;
  meta_description: string;
  meta_title: string;
  subtitle: Subtitle;
  title: SourceTitle;
}

export interface Ancestry {
  category: Category;
  subcategory: Category;
  type: Category;
}

export interface Category {
  pretty_slug: string;
  slug: string;
}

export interface CoverPhoto {
  alt_description: AltDescription;
  alternative_slugs: AlternativeSlugs;
  asset_type: AssetType;
  blur_hash: BlurHash;
  breadcrumbs: Breadcrumb[];
  color: Color;
  created_at: Date;
  current_user_collections: any[];
  description: null | string;
  height: number;
  id: ID;
  liked_by_user: boolean;
  likes: number;
  links: ResultLinks;
  plus: boolean;
  premium: boolean;
  promoted_at: null;
  slug: CoverPhotoSlug;
  sponsorship: null;
  topic_submissions: CoverPhotoTopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export enum AltDescription {
  ACloseUpOfAGrayConcreteSurface = "a close up of a gray concrete surface",
  ARedWallWithASignThatSaysMexicoInnamor = "a red wall with a sign that says mexico innamor",
}

export enum BlurHash {
  L3IYFNIU00QMRT80KtRIUM = "L3IYFNIU00~q-;M{R*t80KtRIUM{",
  LcEKRsAzoL0JuoLjZwfWqoLa = "LcE^KRs:azoL|0juoLjZwfWqoLa|",
}

export enum Color {
  A64040 = "#a64040",
  A6A6A6 = "#a6a6a6",
}

export enum ID {
  CTXf1GVyf9A = "ctXf1GVyf9A",
  OHWCOXSYdsg = "oHWCOXSYdsg",
}

export enum CoverPhotoSlug {
  ACloseUpOfAGrayConcreteSurfaceCTXf1GVyf9A = "a-close-up-of-a-gray-concrete-surface-ctXf1GVyf9A",
  ARedWallWithASignThatSaysMexicoInnamorOHWCOXSYdsg = "a-red-wall-with-a-sign-that-says-mexico-innamor-oHWCOXSYdsg",
}

export interface CoverPhotoTopicSubmissions {
  nature?: Nature;
  "textures-patterns"?: Nature;
}

export interface Nature {
  approved_on: Date;
  status: Status;
}

export enum Status {
  Approved = "approved",
}

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface User {
  accepted_tos: boolean;
  bio: null | string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: null | string;
  last_name: string;
  links: UserLinks;
  location: null | string;
  name: string;
  portfolio_url: null | string;
  profile_image: ProfileImage;
  social: Social;
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: null | string;
  updated_at: Date;
  username: string;
}

export interface UserLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

export interface ProfileImage {
  large: string;
  medium: string;
  small: string;
}

export interface Social {
  instagram_username: null | string;
  paypal_email: null;
  portfolio_url: null | string;
  twitter_username: null | string;
}

export enum Subtitle {
  DownloadFreeGreyWallpapers = "Download free grey wallpapers",
  DownloadFreeMexicoImages = "Download free mexico images",
}

export enum SourceTitle {
  HDGreyWallpapers = "Hd grey wallpapers",
  MexicoPicturesImages = "Mexico pictures & images",
}

export interface ResultTopicSubmissions {
  "architecture-interior"?: ArchitectureInterior;
  "business-work"?: ArchitectureInterior;
}

export interface ArchitectureInterior {
  status: string;
}

export interface UnsplashApiRes {
  url: UnsplashApiResBase['results'][0]['urls']['regular']
}