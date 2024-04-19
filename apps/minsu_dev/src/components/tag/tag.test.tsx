import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from './index';

describe('Tag Component', () => {
  it('renders the tag name correctly', () => {
    const tagName = 'workspace';
    const tagId = 102;
    render(<Tag name={tagName} id={tagId} />);

    expect(screen.getByText(`#${tagName}`)).toBeInTheDocument();
  });

  it('creates the link with the correct id', () => {
    const tagName = 'workspace';
    const tagId = 42;
    render(<Tag name={tagName} id={tagId} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', `/posts/${tagId}`);
  });
});
