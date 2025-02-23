import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    const handleGoHome = () => {
        navigate('/');
    };

    let status = 500;
    let message = "Kechirasiz, nimadir xato bo'ldi...";

    if (isRouteErrorResponse(error)) {
        status = error.status;
        if (status === 404) {
            message = "Kechirasiz, sahifa topilmadi...";
        }
    }

    return (
        <Container component="main" sx={{ textAlign: 'center', marginTop: 8 }}>
            <Box>
                <Typography variant="h1" color="error" gutterBottom sx={{ fontWeight: '700' }}>
                    {status}
                </Typography>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                    {message}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    {status === 404 ? 'Bunday sahifa mavjud emas!' : "Xatolik yuz berdi, keyinroq qayta urinib ko'ring."}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleGoHome}>
                    Bosh sahifa
                </Button>
            </Box>
        </Container>
    );
};

export default ErrorPage;
