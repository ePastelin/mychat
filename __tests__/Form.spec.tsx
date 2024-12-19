import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import Form from '@/components/auth/Form'
import '@testing-library/jest-dom'
import { describe, it, expect, jest } from '@jest/globals'

jest.mock('@/hooks/api/fetcher', () => ({
  login: jest.fn(), // Mockea la función de login
}))

describe('Form Component', () => {
  it('renders the login form correctly', () => {
    render(<Form />)

    // Verificar que los inputs se rendericen
    expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contraseña')).toBeInTheDocument()

    // Verificar que el botón se renderice
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument()
  })

  it('handles input changes', () => {
    render(<Form />)

    const usernameInput = screen.getByPlaceholderText('Usuario')
    const passwordInput = screen.getByPlaceholderText('contraseña')

    // Simular escritura en los inputs
    fireEvent.change(usernameInput, { target: { value: 'testuser' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    // Verificar que los valores cambien
    expect(usernameInput).toHaveValue('testuser')
    expect(passwordInput).toHaveValue('password123')
  })

  // it('submits the form and calls the login function', async () => {
  //   const { login } = require('@/hooks/api/fetcher')
  //   login.mockResolvedValue({}) // Simula una respuesta exitosa

  //   render(<Form />)

  //   const usernameInput = screen.getByPlaceholderText('Usuario')
  //   const passwordInput = screen.getByPlaceholderText('contraseña')
  //   const form = screen.getByRole('form') // Asegúrate de que el formulario tiene un role explícito

  //   // Simular escritura en los inputs
  //   fireEvent.change(usernameInput, { target: { value: 'testuser' } })
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } })

  //   await act(async () => {
  //     fireEvent.submit(form)
  //   })

  //   console.log(login.mock.calls) // Verifica si se registra la llamada al mock

  //   // Verificar que la función de login fue llamada
  //   await waitFor(() => {
  //     expect(login).toHaveBeenCalledWith(
  //       'testuser',
  //       'password123',
  //       expect.any(Object), // Para `e`
  //       expect.any(Function), // Para `setError`
  //     )
  //   })
  // })

  it('displays an error message on login failure', async () => {
    const { login } = require('@/hooks/api/fetcher')
    login.mockRejectedValueOnce(new Error('Invalid credentials'))

    render(<Form />)

    const usernameInput = screen.getByPlaceholderText('Usuario')
    const passwordInput = screen.getByPlaceholderText('contraseña')
    const submitButton = screen.getByRole('button', { name: /Enviar/i })

    // Simular escritura en los inputs
    fireEvent.change(usernameInput, { target: { value: 'testuser' } })
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })

    // Simular envío del formulario
    fireEvent.click(submitButton)

    // Verificar que se muestra el mensaje de error
    expect(await screen.findByText('Contraseña o usuario inválido')).toBeInTheDocument()
  })
})
