import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/components/hello';

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
