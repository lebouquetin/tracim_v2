# coding=utf-8
import transaction
from tracim_backend.error_code import *
from tracim_backend.extensions import app_list
from tracim_backend.lib.core.application import ApplicationApi
from tracim_backend.lib.utils.utils import get_timezones_list
from tracim_backend.models import get_tm_session
from tracim_backend.app_models.contents import CONTENT_TYPES
from tracim_backend.tests import FunctionalTest

"""
Tests for /api/v2/system subpath endpoints.
"""


class TestApplicationEndpoint(FunctionalTest):
    """
    Tests for /api/v2/system/applications
    """

    def test_api__get_applications__ok_200__nominal_case(self):
        """
        Get applications list with a registered user.
        """
        self.testapp.authorization = (
            'Basic',
            (
                'admin@admin.admin',
                'admin@admin.admin'
            )
        )
        res = self.testapp.get('/api/v2/system/applications', status=200)
        res = res.json_body
        dbsession = get_tm_session(self.session_factory, transaction.manager)
        app_api = ApplicationApi(
            app_list=app_list,
        )
        applications = app_api.get_all()
        assert len(res) == len(applications)
        for counter, application in enumerate(applications):
            assert res[counter]['label'] == application.label
            assert res[counter]['slug'] == application.slug
            assert res[counter]['fa_icon'] == application.fa_icon
            assert res[counter]['hexcolor'] == application.hexcolor
            assert res[counter]['is_active'] == application.is_active
            assert res[counter]['config'] == application.config

    def test_api__get_applications__err_401__unregistered_user(self):
        """
        Get applications list with an unregistered user (bad auth)
        """
        self.testapp.authorization = (
            'Basic',
            (
                'john@doe.doe',
                'lapin'
            )
        )
        res = self.testapp.get('/api/v2/system/applications', status=401)
        assert isinstance(res.json, dict)
        assert 'code' in res.json.keys()
        assert res.json_body['code'] is None
        assert 'message' in res.json.keys()
        assert 'details' in res.json.keys()


class TestContentsTypesEndpoint(FunctionalTest):
    """
    Tests for /api/v2/system/content_types
    """

    def test_api__get_content_types__ok_200__nominal_case(self):
        """
        Get system content_types list with a registered user.
        """
        self.testapp.authorization = (
            'Basic',
            (
                'admin@admin.admin',
                'admin@admin.admin'
            )
        )
        res = self.testapp.get('/api/v2/system/content_types', status=200)
        res = res.json_body
        assert len(res) == len(CONTENT_TYPES.endpoint_allowed_types_slug())
        content_types = CONTENT_TYPES.endpoint_allowed_types_slug()

        for counter, content_type_slug in enumerate(content_types):
            content_type = CONTENT_TYPES.get_one_by_slug(content_type_slug)
            assert res[counter]['slug'] == content_type.slug
            assert res[counter]['fa_icon'] == content_type.fa_icon
            assert res[counter]['hexcolor'] == content_type.hexcolor
            assert res[counter]['label'] == content_type.label
            assert res[counter]['creation_label'] == content_type.creation_label
            for status_counter, status in enumerate(content_type.available_statuses):
                assert res[counter]['available_statuses'][status_counter]['fa_icon'] == status.fa_icon  # nopep8
                assert res[counter]['available_statuses'][status_counter]['global_status'] == status.global_status  # nopep8
                assert res[counter]['available_statuses'][status_counter]['slug'] == status.slug  # nopep8
                assert res[counter]['available_statuses'][status_counter]['hexcolor'] == status.hexcolor  # nopep8

    def test_api__get_content_types__err_401__unregistered_user(self):
        """
        Get system content_types list with an unregistered user (bad auth)
        """
        self.testapp.authorization = (
            'Basic',
            (
                'john@doe.doe',
                'lapin'
            )
        )
        res = self.testapp.get('/api/v2/system/content_types', status=401)
        assert isinstance(res.json, dict)
        assert 'code' in res.json.keys()
        assert res.json_body['code'] is None
        assert 'message' in res.json.keys()
        assert 'details' in res.json.keys()


class TestTimezonesEndpoint(FunctionalTest):
    """
    Tests for /api/v2/system/timezones
    """

    def test_api__get_timezones__ok_200__nominal_case(self):
        """
        Get alls timezones list with a registered user.
        """
        self.testapp.authorization = (
            'Basic',
            (
                'admin@admin.admin',
                'admin@admin.admin'
            )
        )
        res = self.testapp.get('/api/v2/system/timezones', status=200)
        timezones = res.json_body
        timezones_list = get_timezones_list()
        assert len(timezones) == len(timezones_list)

        for counter, timezone in enumerate(timezones_list):
            assert timezones[counter]['name'] == timezone.name

    def test_api__get_content_types__err_401__unregistered_user(self):
        """
        Get availables timezones list with an unregistered user (bad auth)
        """
        self.testapp.authorization = (
            'Basic',
            (
                'john@doe.doe',
                'lapin'
            )
        )
        res = self.testapp.get('/api/v2/system/timezones', status=401)
        assert isinstance(res.json, dict)
        assert 'code' in res.json.keys()
        assert res.json_body['code'] is None
        assert 'message' in res.json.keys()
        assert 'details' in res.json.keys()
