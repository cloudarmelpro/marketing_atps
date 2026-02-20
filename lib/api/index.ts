export { apiClient, getApiBaseUrl } from './client';
export { blogService } from './blog';
export { newsService } from './news';
export {
  transformBlogArticle,
  transformBlogArticles,
  transformNewsItem,
  transformNewsItems,
  formatDisplayDate,
} from './transformers';

export type {
  BlogArticle,
  BlogSection,
  BlogListResponse,
  BlogCategoriesResponse,
  BlogTagsResponse,
  BlogQueryParams,
  NewsItem,
  NewsListResponse,
  NewsCategoriesResponse,
  NewsTagsResponse,
  NewsQueryParams,
  PaginationInfo,
  Author,
  ApiError,
  ApiResponse,
} from '@/lib/types';

export type { TransformedBlogPost, TransformedNewsItem } from './transformers';
