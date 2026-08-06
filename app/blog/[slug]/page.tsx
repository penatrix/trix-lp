import { supabase } from '../../../lib/supabase';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogCTA from '../../../components/BlogCTA';

// 1. Tipagem para lidar com o params assíncrono do Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
};

// 2. A Mágica do SEO Dinâmico
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Vai no banco buscar apenas o necessário para o SEO
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, image_url, content')
    .eq('slug', slug)
    .single();

  if (!post) {
    return { title: 'Post não encontrado | Trix Travel' };
  }

  // Se o post não tiver imagem de capa, usamos a imagem principal do site como fallback
  const ogImage = post.image_url || 'https://trix.travel/og-image.jpg';

  return {
    title: `${post.title} | Blog Trix Travel`,
    description: `Leia o artigo "${post.title}" e descubra como otimizar suas viagens com a Trix Travel.`,
    openGraph: {
      title: post.title,
      description: `Leia o artigo "${post.title}" no Blog da Trix Travel.`,
      url: `https://trix.travel/blog/${slug}`,
      type: 'article',
      siteName: 'Trix Travel',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      images: [ogImage],
    },
  };
}

// Desativa o cache (opcional, bom manter enquanto testa)
export const dynamic = 'force-dynamic'; 

// 3. O Componente da Página (visual) que já estava funcionando
export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-secondary-bg text-primary-text font-sans py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-secondary-text hover:text-primary text-sm mb-8 inline-block font-medium">
          ← Voltar para o Blog
        </Link>
        
        {post.image_url && (
          <img 
            src={post.image_url} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover rounded-3xl mb-8 shadow-md" 
          />
        )}
        
        <h1 className="font-outfit text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-sm text-secondary-text mb-12 pb-8 border-b border-alternate">
          Publicado em {new Date(post.created_at).toLocaleDateString('pt-BR')}
        </p>

        <div className="prose prose-lg max-w-none text-secondary-text prose-headings:font-outfit prose-headings:text-primary-text prose-a:text-primary">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        {/* Aqui entra a isca para capturar os leads! */}
        <BlogCTA />
        
      </article>
    </div>
  );
}