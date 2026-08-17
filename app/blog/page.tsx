import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../../lib/supabase';

export const revalidate = 3600;

// SEO estático para a página principal do Blog
export const metadata = {
  title: 'Blog | Trix Travel',
  description: 'Dicas de viagem, hacks de logística e novidades do Trix Travel.',
  alternates: {
    canonical: '/blog',
  },
};

// Como não tem 'use client', isso roda 100% no servidor (ultra rápido e otimizado para o Google)
export default async function BlogIndex() {
  // Busca os posts no Supabase ordenados do mais novo para o mais antigo
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, image_url, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar posts:', error);
  }

  return (
    <div className="min-h-screen bg-secondary-bg text-primary-text font-sans py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-secondary-text hover:text-primary text-sm mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <h1 className="font-outfit text-5xl font-bold mb-12">Nosso Blog</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="bg-primary-bg rounded-2xl overflow-hidden border border-alternate hover:border-primary transition-all shadow-sm h-full flex flex-col">
                {post.image_url ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-alternate flex items-center justify-center text-secondary-text">
                    Sem imagem
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-secondary-text mb-2 font-medium">
                    {new Date(post.created_at).toLocaleDateString('pt-BR')}
                  </p>
                  <h2 className="font-outfit text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-primary text-sm mt-auto font-medium">Ler artigo →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}