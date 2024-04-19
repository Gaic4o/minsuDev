import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

describe('PostCard Component', () => {
  const mockPost = {
    id: 1,
    title: 'Test Title',
    content: 'Test content here.',
    created_at: '2021-01-01T00:00:00.000Z',
    preview_image_url: '/test.webp',
  };

  it('should display title, content, and formattedDate correctly in PostContent', () => {
    render(<PostCard {...mockPost} />);
    const formattedDate = '2021년 1월 1일';

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.content)).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('should display the image correctly with the correct alt text in PostImage', () => {
    render(<PostCard {...mockPost} />);
    const image = screen.getByRole('img', { name: mockPost.title });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', mockPost.title);
  });
});
