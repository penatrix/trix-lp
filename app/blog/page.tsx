import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../../lib/supabase';

export const revalidate = 3600;

// SEO estático para a página principal do Blog
export const metadata = {
  title: 'Blog | Trix',
  description: 'Como decidir base, ritmo, deslocamento e orçamento de uma viagem — e o que a Trix resolve por você.',
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
    <div className="min-h-screen bg-areia text-neutro-950 font-sans py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-neutro-600 hover:text-terracota-700 text-sm mb-8 inline-block">
          ← Voltar
        </Link>
        
        <h1 className="titulo-secao text-5xl font-bold mb-12">Blog</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="bg-neutro-100 rounded-2xl overflow-hidden border border-neutro-300 hover:border-navy-500 transition-all shadow-sm h-full flex flex-col">
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
                  <div className="w-full h-48 bg-neutro-100 flex items-center justify-center text-neutro-600">
                    Sem imagem
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-neutro-600 mb-2 font-medium">
                    {new Date(post.created_at).toLocaleDateString('pt-BR')}
                  </p>
                  <h2 className="titulo-secao text-xl font-semibold mb-3 group-hover:text-terracota-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-terracota-700 text-sm mt-auto font-medium">Ler artigo →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}