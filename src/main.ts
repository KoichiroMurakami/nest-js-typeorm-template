import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  )
  // NestExprtessApplicationの総称型を指定することにより、expressベースのアプリケーションを作成することが可能

  // 静的ファイルの管理先
  app.useStaticAssets(join(__dirname, 'public'))
  // viewテンプレートの管理先
  app.setBaseViewsDir(join(__dirname, 'views'))
  // テンプレートエンジンを指定
  app.setViewEngine('ejs')

  await app.listen(3000);
}
bootstrap();