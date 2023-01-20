import { render, screen } from '@testing-library/react';
import App from 'App';

describe('<App />', () => {
  it('renders', async () => {
    window.history.pushState({}, 'Home', '/');
    render(<App />);

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
