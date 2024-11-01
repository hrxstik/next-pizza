import { Container } from '@/components/shared/containter';
import { Title } from '@/components/shared/title';

export default function Home() {
  return (
    <h1>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
    </h1>
  );
}
