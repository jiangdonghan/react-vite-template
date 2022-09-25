import { render } from '@testing-library/react'
import App from './App'

describe('test app', () => {
  it('should render app', () => {
    const wrapper = render(<App />)
    const element = wrapper.getByText('App')
    expect(element).toBeInTheDocument()
  })
})
