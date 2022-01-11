import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

	public async createProduct(
		createProductDto: CreateProductDTO,
	): Promise<Product> {
		const { name, description, price } = createProductDto;

		const product = new Product();
		product.name = name;
		product.description = description;
		product.price = price;

		try {
			await product.save();
			return product;
		} catch (e) {
			throw new InternalServerErrorException('Erro ao salvar no banco de dados, erro:' + e)
		}
	}

	public async editProduct(
		createProductDto: CreateProductDTO,
		editedProduct: Product,
	): Promise<Product> {
		const { name, description, price } = createProductDto;

		editedProduct.name = name;
		editedProduct.description = description;
		editedProduct.price = price;
		await editedProduct.save();

		return editedProduct;
	}
}