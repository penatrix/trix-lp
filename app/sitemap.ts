import type { MetadataRoute } from 'next';
import { supabase } from '../lib/supabase';

const baseUrl = 'https://trix.travel';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/roteiro-de-viagem-15-dias`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/roteiro-europa`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/app-para-planejar-viagens`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gerador-de-roteiro-de-viagem-ia`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/quanto-custa-viajar`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fugir-do-turismo-de-massa`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/termos`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/privacidade`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug, created_at');

  const postRoutes: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.created_at ? new Date(post.created_at) : undefined,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
