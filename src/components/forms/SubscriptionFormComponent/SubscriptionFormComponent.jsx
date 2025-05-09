import { useEffect, useState } from "react"
import { Form, InputGroup, Button, FormText, Row, Col } from "react-bootstrap"
import DicebearApi from "../../../apis/DicebearApi"
import streamingBackendApi from "../../../apis/StreamingBackendApi"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function SubscriptionFormComponent () {
    const subscriptionForm = useForm()

    const [avatar, setAvatar] = useState()
    const [avatarSeed, setAvatarSeed] = useState() 

    const navigate = useNavigate()

    const handleAvatar = () => {
        streamingBackendApi.getDacebearSeed().then(response  => {
            const { seed } = response.info
            
            DicebearApi.getAvatarBySeed(seed).then(response => {
                const blob = new Blob([response], { type: 'image/svg+xml' })
                setAvatar(URL.createObjectURL(blob))
                setAvatarSeed(seed)
            })
            
        })

    }

    useEffect(() => {
        handleAvatar()
    }, [])

    const handleSignup = () => {
        const { nickname } = subscriptionForm.getValues()
        sessionStorage.setItem('user', JSON.stringify({ nickname, avatarSeed }))

        navigate('/users')
    }

    return (
        <>
            <Form className='mt-5'>
                <InputGroup>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        {avatar && <img src={avatar} width='150' alt="Avatar" />}
                    </div>
                    <Button variant='primary' onClick={handleAvatar} style={{ minWidth: '100%' }}>
                        Gerar outro(a)
                    </Button>
                </InputGroup>
                <FormText className='mt-1'>ℹ️ Escolha um avatar.</FormText>

                <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Nickname" {...subscriptionForm.register('nickname')}/>
                    <FormText className='mt-1'>ℹ️ Capriche no seu apelido no app.</FormText>
                </Form.Group>
               
                <Row className='mt-3'>
                    <Col className='d-flex justify-content-end'>
                        <Button onClick={handleSignup}>Cadastrar</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default SubscriptionFormComponent