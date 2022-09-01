import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Produtos from './produtos/produtos.entity';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriaModule } from './categoria/categoria.module';
import categoria from './categoria/categoria.entity';

@Module({
  imports: [
    ProdutosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'clouddog.c2emjupcltf2.sa-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'root',
      password: 'clouddogroot',
      database: 'clouddog',
      entities: [Produtos, categoria],
      synchronize: true,
    }),
    CategoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
