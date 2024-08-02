import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { MdOutlineFileDownload } from 'react-icons/md';

const Main = () => {
    const printElem = useRef(null);

    const handleDownload = () => {
        const element = printElem.current;
        const options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(options).save();
    };

    return (
        <Container
            bg={'gray.50'}
            minW={'full'}
            py={10}
            id='builder'
            ref={printElem}
        >
            <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'large'}> Dashboard</Heading>

            <Container maxW={'7xl'} px={8} my={3}>
                <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <ThemeSelect />
                    <Button rightIcon={<MdOutlineFileDownload />} onClick={handleDownload} colorScheme={'blue'}>Download</Button>
                </Stack>
            </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                gap={4}
                mx={{ base: 2, md: 12 }}
                my={8}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
            >
                <Builder />
                <ResumePreview />
            </Stack>
        </Container>
    )
}

export default Main
