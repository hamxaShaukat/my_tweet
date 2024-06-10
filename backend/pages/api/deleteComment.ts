import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function deleteCommentHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).end(); // Method Not Allowed
  }

  const commentId = req.query.id as string | undefined;
  console.log(commentId);

  try {
    // Check if the comment exists
    const existingComment = await prisma.comment.findUnique({
      where: {
        id: String(commentId),
      },
    });

    if (!existingComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await prisma.comment.delete({
      where: {
        id: String(commentId),
      },
    });

    return res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
