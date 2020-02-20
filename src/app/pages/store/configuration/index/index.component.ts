import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../../shared/authetication/authentication.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public companyId;
  public userId;
  constructor(private route: ActivatedRoute,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.companyId = this.route.snapshot.parent.parent.paramMap.get('companyId');
    this.userId = this.authenticationService.getUserId();
  }

}
