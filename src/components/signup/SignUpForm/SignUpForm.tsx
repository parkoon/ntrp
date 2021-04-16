import React from 'react'
import styled from 'styled-components'

import Anchor from '@Components/atomic/Anchor'
import Box from '@Components/atomic/Box'
import Button from '@Components/atomic/Button'
import Divider from '@Components/atomic/Divider'
import Form from '@Components/atomic/Form'
import { TextInput } from '@Components/atomic/Input'
import SocialLogin from '@Components/common/SocialLogin'

type FormValues = {
  name: string
  email: string
  password: string
}
function SignUpForm() {
  const handleSubmit = (data: FormValues) => console.log(data)

  return (
    <Form<FormValues> onSubmit={handleSubmit}>
      {({ register, formState }) => {
        console.log(formState.errors)
        return (
          <>
            <SocialLogin />

            <Divider gutter={32} />

            <Box gutter={24}>
              <TextInput
                label="이름"
                type="text"
                placeholder="이름을 입력해주세요"
                error={Boolean(formState.errors.name)}
                errorMessage={
                  formState.errors.name?.type === 'required' ? '이름을 입력해주세요' : ''
                }
                {...register('name', { required: true })}
              />
            </Box>
            <Box gutter={24}>
              <TextInput
                label="이메일"
                type="text"
                placeholder="이메일을 입력해주세요"
                error={Boolean(formState.errors.email)}
                errorMessage={
                  formState.errors.email?.type === 'required' ? '이메일을 입력해주세요' : ''
                }
                {...register('email', { required: true })}
              />
            </Box>
            <Box gutter={24}>
              <TextInput
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                error={Boolean(formState.errors.password)}
                errorMessage={
                  formState.errors.password?.type === 'required' ? '비밀번호를 입력해주세요' : ''
                }
                {...register('password', { required: true })}
              />
            </Box>

            <Box gutter={12}>
              <Button type="submit">회원가입</Button>
            </Box>
          </>
        )
      }}
    </Form>
  )
}

export default SignUpForm
