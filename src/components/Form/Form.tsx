import React, { useState } from 'react'

import { Button } from '../Button/Button'
import {
  Error,
  FormContainer,
  Input,
  InputBox,
  Select,
  Textarea
} from './Styled'

interface FormProps {
  name: string
  email: string
  phone: string
  select: string
  textarea: string
}

interface BlurProps {
  name: boolean
  email: boolean
  phone: boolean
  select: boolean
  textarea: boolean
}

export function Form() {
  const [form, setForm] = useState<FormProps>({
    name: '',
    email: '',
    phone: '',
    select: '',
    textarea: ''
  })

  const [blur, setBlur] = useState<BlurProps>({
    name: false,
    email: false,
    phone: false,
    select: false,
    textarea: false
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
      initial={{ transform: 'translateX(-2rem)' }}
      animate={{ transform: 'translateX(0rem)' }}
      exit={{ transform: 'translateX(-2rem)' }}
      transition={{ duration: 0.35 }}
    >
      <h1>Fale conosco</h1>

      <InputBox>
        <Input variant={blur.name && form.name === '' ? 'outline' : 'normal'}>
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onBlur={() =>
              setBlur({
                ...blur,
                name: true
              })
            }
            onChange={event =>
              setForm({
                ...form,
                name: event.currentTarget?.value || ''
              })
            }
            required
          />
        </Input>
        {blur.name && form.name === '' ? <Error>Digite seu nome</Error> : ''}
      </InputBox>

      <fieldset>
        <InputBox>
          <Input
            variant={blur.email && form.email === '' ? 'outline' : 'normal'}
          >
            <label htmlFor="email" />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onBlur={() =>
                setBlur({
                  ...blur,
                  email: true
                })
              }
              onChange={event =>
                setForm({
                  ...form,
                  email: event.currentTarget?.value || ''
                })
              }
              required
            />
          </Input>
          {blur.email && form.email === '' ? (
            <Error>Digite seu e-mail</Error>
          ) : (
            ''
          )}
        </InputBox>

        <InputBox>
          <Input
            variant={blur.phone && form.phone === '' ? 'outline' : 'normal'}
          >
            <label htmlFor="phone" />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              onBlur={() =>
                setBlur({
                  ...blur,
                  phone: true
                })
              }
              onChange={event =>
                setForm({
                  ...form,
                  phone: event.currentTarget?.value || ''
                })
              }
              required
            />
          </Input>
          {blur.phone && form.phone === '' ? (
            <Error>Digite seu telefone</Error>
          ) : (
            ''
          )}
        </InputBox>
      </fieldset>

      <Select
        variant={blur.select && form.select === '' ? 'outline' : 'normal'}
      >
        <select
          defaultValue="default"
          onBlur={() =>
            setBlur({
              ...blur,
              select: true
            })
          }
          onChange={event =>
            setForm({
              ...form,
              select: event.currentTarget?.value || ''
            })
          }
          required
        >
          <option value="default" hidden>
            Selecione um assunto
          </option>
          <option value="duvida">Dúvida</option>
          <option value="sugestao">Sugestão</option>
          <option value="reclamacao">Reclamação</option>
        </select>

        {blur.select && form.select === '' ? (
          <Error>Selecione um assunto</Error>
        ) : (
          ''
        )}
      </Select>

      <Textarea
        variant={blur.textarea && form.textarea === '' ? 'outline' : 'normal'}
      >
        <textarea
          placeholder="Digite sua mensagem"
          onBlur={() =>
            setBlur({
              ...blur,
              textarea: true
            })
          }
          onChange={event =>
            setForm({
              ...form,
              textarea: event.currentTarget?.value || ''
            })
          }
          required
        />
        <div>
          {blur.textarea && form.textarea === '' ? (
            <Error>Digite sua mensagem</Error>
          ) : (
            ''
          )}
          <p>0/500</p>
        </div>
      </Textarea>

      <Button type="submit" variant="normal">
        <span>Enviar mensagem</span>
      </Button>
    </FormContainer>
  )
}
