import React from 'react'
import styled from 'styled-components'

import Anchor from '@Components/atomic/Anchor'
import Box from '@Components/atomic/Box'
import Button from '@Components/atomic/Button'
import Form from '@Components/atomic/Form'
import { TextInput } from '@Components/atomic/Input'
import SocialLogin from '@Components/common/SocialLogin'

type FormValues = {
  email: string
  password: string
}
function LoginForm() {
  const handleSubmit = (data: FormValues) => console.log(data)

  return (
    <Form<FormValues> onSubmit={handleSubmit}>
      {({ register, formState }) => {
        console.log(formState.errors)
        return (
          <>
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
              <Button type="submit">로그인</Button>
            </Box>

            <Box flex hAlignment="center" gutter={32}>
              <Anchor>비밀번호 재설정</Anchor>
              <Anchor>회원가입</Anchor>
            </Box>

            <SocialLogin />
          </>
        )
      }}
    </Form>
  )
}

export default LoginForm
