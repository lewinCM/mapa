import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { PublicService } from 'src/app/core/services/public.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  arrUsers: User[] = [];
  // currentPage: number = 1;
  // totalPages: number = 1;
  filterName: string = ''; // El nombre ingresado para filtrar
  filterPrice: number | null = null; // El precio ingresado para filtrar
  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.gotoPage();
  }

  async gotoPage(): Promise<void> {
    try {
      let response = await this.publicService.getAll()
      console.log(response);
      this.arrUsers = response.teachers;
      console.log(this.arrUsers);
    }
    catch (error) {
      console.log(error);
    }
  }
  get filteredUsers(): User[] {
    if (this.filterName.trim() === '' && this.filterPrice === null) {
      return this.arrUsers; // Si no se ha ingresado un nombre ni un precio, muestra todos los usuarios
    } else {
      return this.arrUsers.filter(user => {
        const lowerCaseUsername = user.username.toLowerCase();
        const lowerCaseFullname = user.fullname.toLowerCase();
        const userPrice = user.price ?? 0; // Si el precio no está definido, se asume un valor de 0

        // Filtra los usuarios por nombre de usuario, nombre completo y precio
        return (lowerCaseUsername.includes(this.filterName.toLowerCase()) ||
          lowerCaseFullname.includes(this.filterName.toLowerCase())) &&
          (this.filterPrice === null || userPrice <= this.filterPrice);
      });
    }
  }
}
