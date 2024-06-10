import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).end(); // Method Not Allowed
  }

  const postId = req.query.id as string | undefined;
  console.log(postId)

  try {
    // Check if the post exists
    const existingPost = await prisma.post.findUnique({
      where: {
        id: String(postId),
      },
    });

    if (!existingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the current user is authorized to delete the post (optional step)

    // Delete the post
    await prisma.post.delete({
      where: {
        id:String( postId),
      },
    });

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
