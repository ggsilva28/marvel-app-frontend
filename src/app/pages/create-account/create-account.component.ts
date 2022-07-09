import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent implements OnInit {

  public form: UntypedFormGroup;
  public loading: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  async submit() {
    if (this.form.valid) {
      this.loading = true;
      const response = await this.authService.createAccount(this.form.value)
      this.loading = false;

      if (response.isOk) {
        this.authService.save(response.data.user, response.data.token);
        this.toastr.success('Conta criada. Seja bem-vindo!');
        this.router.navigate(['/home']);
      } else {
        this.toastr.error(this.authService.messages(response.message));
      }

    } else {
      this.toastr.error('Preencha todos os campos corretamente');
    }

  }
}
